const { readFileSync, writeFileSync } = require("fs");
const pkg = require("js-yaml");
const { v4: uuidv4 } = require("uuid");

const { load } = pkg;
const userDirectory = process.argv[2];

const getAuthorization = () => {
  const path = `${userDirectory}/env.json`;
  let envJSON = JSON.parse(readFileSync(path));
  return envJSON.ADMIN_SECRET;
};

const resetAuthorization = () => {
  const path = `${userDirectory}/env.json`;
  const adminSecret = uuidv4();

  let envJSON = JSON.parse(readFileSync(path));
  envJSON.ADMIN_SECRET = adminSecret;
  writeFileSync(path, JSON.stringify(envJSON), "utf8");

  return adminSecret;
};

const getDataSources = () => {
  const meshrc = load(readFileSync(`${userDirectory}/.meshrc.yaml`, "utf8"));

  const transformedSources = meshrc.sources.map((source) => {
    const newSource = { name: source.name };
    if (source.handler.postgraphile) {
      newSource.type = "postgres";
      newSource.connection = {
        connectionString: source.handler.postgraphile.connectionString,
      };
    } else if (source.handler.graphql) {
      newSource.type = "graphql";
      newSource.connection = {
        endpoint: source.handler.graphql.endpoint,
      };
    } else if (source.handler.openapi) {
      newSource.type = "rest";
      newSource.connection = {
        source: source.handler.openapi.source,
      };
    }
    return newSource;
  });

  return transformedSources;
};

module.exports = {
  getAuthorization,
  resetAuthorization,
  getDataSources,
};
