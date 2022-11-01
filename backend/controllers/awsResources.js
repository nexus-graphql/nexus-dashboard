const awsResourcesRouter = require("express").Router();
const helpers = require("../utils/helpers");

awsResourcesRouter.get("/ip", async (_, res) => {
  const arn = helpers.getARN();
  const eni = helpers.getENI(arn);
  const ip = helpers.getIP(eni);

  res.json({ ip });
});

awsResourcesRouter.get("/status", async (req, res) => {
  const arn = helpers.getARN();
  const status = helpers.getStatus(arn);
  res.json({ status });
});

module.exports = awsResourcesRouter;