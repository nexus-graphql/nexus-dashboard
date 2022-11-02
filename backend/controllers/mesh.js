const meshRouter = require("express").Router();
const {
  getAuthorization,
  resetAuthorization,
  getDataSources,
  addDataSource,
  deleteDataSource,
  updateDataSource,
} = require("../utils/mesh");

meshRouter.get("/authorization", (_, res) => {
  res.status(200).json({ authorization: getAuthorization() });
});

meshRouter.post("/authorization", (_, res) => {
  res.status(201).json({ authorization: resetAuthorization() });
});

meshRouter.get("/datasources", (_, res) => {
  res.status(200).json({ sources: getDataSources() });
});

meshRouter.post("/datasources", (req, res) => {
  addDataSource(req.body);
  res.status(201).json({ sources: getDataSources() });
});

meshRouter.put("/datasources", (req, res) => {
  updateDataSource(req.body);
  res.status(201).json({ sources: getDataSources() });
});

meshRouter.delete("/datasources", (req, res) => {
  deleteDataSource(req.body.name);
  res.status(204).send();
});

module.exports = meshRouter;
