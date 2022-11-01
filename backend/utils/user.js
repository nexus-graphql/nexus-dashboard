const userDirectory = process.argv[2];
const { readFileSync } = require("fs");
const pkg = require("js-yaml");
const { load } = pkg;

const getAuthorization = () => {
  const path = `${userDirectory}/env.json`;
  let envJSON = JSON.parse(readFileSync(path));
  return envJSON.ADMIN_SECRET;
};

const getDataSources = () => {
  const template = load(readFileSync(`${userDirectory}/.meshrc.yaml`, "utf8"));
  let resObj = {};
  template.sources.forEach((ele) => {
    if (ele.handler.postgraphile) {
      let connectString = ele.handler.postgraphile.connectionString;
      if (!resObj.postgres) {
        resObj.postgres = [connectString];
      } else {
        resObj.postgres = [...resObj.postgres, connectString];
      }
    } else if (ele.handler.graphql) {
      let connectString = ele.handler.graphql.endpoint;
      if (!resObj.graphql) {
        resObj.graphql = [connectString];
      } else {
        resObj.graphql = [...resObj.graphql, connectString];
      }
    } else if (ele.handler.openapi) {
      let connectString = ele.handler.openapi.source;
      if (!resObj.openapi) {
        resObj.openapi = [connectString];
      } else {
        resObj.openapi = [...resObj.openapi, connectString];
      }
    }
  });

  return resObj;
};

module.exports = {
  getAuthorization,
  getDataSources,
};
