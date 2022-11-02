const express = require("express");
const cors = require("cors");
const awsRouter = require("./controllers/aws.js");
const meshRouter = require("./controllers/mesh.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("build"));
app.use("/api/aws", awsRouter);
app.use("/api/mesh", meshRouter);

module.exports = app;
