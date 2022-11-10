const meshRouter = require("express").Router();
const {
  getAuthorization,
  resetAuthorization,
  getDataSources,
  addDataSource,
  deleteDataSource,
  updateDataSource,
  getLocalChanges,
  setLocalChanges,
  addTypeDef,
  removeTypeDef,
} = require("../utils/mesh");

meshRouter.get("/auth", (_, res) => {
  res.status(200).json({ authorization: getAuthorization() });
});

meshRouter.post("/auth", (_, res) => {
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
  res.status(201).json({ sources: getDataSources() });
});

meshRouter.get("/localchanges", (req, res) => {
  res.status(200).json({ localChanges: getLocalChanges() });
});

meshRouter.post("/localchanges", (req, res) => {
  setLocalChanges(req.body.localChanges);
  res.status(200).json({ localChanges: req.body.localChanges });
});

meshRouter.post("/typedefs", (req, res) => {
  addTypeDef(req.body);
  res.status(201).send();
});

meshRouter.delete("/typedefs", (req, res) => {
  removeTypeDef(req.body);
  res.status(204).send();
});

module.exports = meshRouter;
