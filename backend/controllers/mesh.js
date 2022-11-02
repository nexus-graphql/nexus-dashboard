const meshRouter = require("express").Router();
const {
  getAuthorization,
  resetAuthorization,
  getDataSources,
} = require("../utils/mesh");

meshRouter.get("/authorization", (_, res) => {
  res.json({ authorization: getAuthorization() });
});

meshRouter.post("/authorization", (_, res) => {
  res.json({ authorization: resetAuthorization() });
});

meshRouter.get("/datasources", (_, res) => {
  res.json({ sources: getDataSources() });
});

module.exports = meshRouter;
