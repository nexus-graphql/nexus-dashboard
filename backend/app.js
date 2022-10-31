const express = require("express");
const app = express();
const cors = require("cors");
const awsRouter = require("./controllers/awsResources.js");

app.use(express.json());
app.use(cors());

app.use("/api/aws", awsRouter);

module.exports = app;
