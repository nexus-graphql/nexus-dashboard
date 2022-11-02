const userResourcesRouter = require("express").Router();
const userHelpers = require("../utils/user");

userResourcesRouter.get("/authorization", (req, res) => {
  res.json({ authorization: userHelpers.getAuthorization() });
});

userResourcesRouter.post("/authorization", (req, res) => {
  res.json({ authorization: userHelpers.resetAuthorization() });
});

userResourcesRouter.get("/dataSources", (req, res) => {
  res.json(userHelpers.getDataSources());
});

module.exports = userResourcesRouter;
