const awsRouter = require("express").Router();
const { getIP, getStatus } = require("../utils/aws");

awsRouter.get("/ip", (_, res) => {
  res.json({ ip: getIP() });
});

awsRouter.get("/status", (_, res) => {
  res.json({ status: getStatus() });
});

module.exports = awsRouter;
