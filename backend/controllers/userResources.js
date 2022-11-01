const userResourcesRouter = require("express").Router();
const userHelpers = require("../utils/user");

userResourcesRouter.get("/authorization", (req, res) => {
  res.json({ authorization: userHelpers.getAuthorization() });
});

userResourcesRouter.get("/dataSources", (req, res) => {});

module.exports = userResourcesRouter;
