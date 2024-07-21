console.log("Hello Kususm ");

const express = require("express");
require("dotenv").config();
const app = express();
// const port = 3000;
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Kusum I Love You ");
});

app.get("/kusum", (req, res) => {
  res.send("<h1>Love you Kusum Your Govind </h1>");
});

app.listen(port, () => {
  console.log(`⚙︎ Server is Running on =>> http://localhost:${port}`);
});
