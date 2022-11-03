const express = require("express");
const cors = require("cors");
const awsRouter = require("./controllers/aws.js");
const meshRouter = require("./controllers/mesh.js");
const { graphiqlStart } = require("./utils/graphiql.js");

const app = express();
graphiqlStart();

app.use(express.json());
app.use(cors());
app.use(express.static("build"));
app.use("/api/aws", awsRouter);
app.use("/api/mesh", meshRouter);

module.exports = app;
