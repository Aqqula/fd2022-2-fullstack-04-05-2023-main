const express = require("express");
const cors = require("cors");
const router = require("./routes");
const { handleError } = require("./middlewares/handle.error");

const app = express();
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

// http://localhost:3000/api
app.use("/api", router);

app.use(handleError);

module.exports = app;
