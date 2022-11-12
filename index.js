const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("learning server is working");
});

app.listen(port, () => {
  console.log("learning programing server is running on: ", port);
});
