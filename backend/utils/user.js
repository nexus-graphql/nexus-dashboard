const userDirectory = process.argv[2];
const { readFileSync } = require("fs");

const getAuthorization = () => {
  const path = `${userDirectory}/env.json`;
  let envJSON = JSON.parse(readFileSync(path));
  return envJSON.ADMIN_SECRET;
};

const getDataSources = () => {};

module.exports = {
  getAuthorization,
};
