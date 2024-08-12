const express = require("express");
const cors = require("cors");
const { connection } = require("./config/connection");
const { routers } = require("./router/router");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("", routers);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`sercver connected with port ${process.env.PORT}`);
  } catch (error) {
    console.log("connection failed");
  }
});
