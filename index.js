const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");
const questions = require("./data/Question.json");

app.get("/", (req, res) => {
  res.send("learning server is working");
});

app.get("/course", (req, res) => {
  res.send(courses);
});

app.get("/category/:id/", (req, res) => {
  const id = req.params.id;
  const selectedItems = courses.filter((course) => course.category_id == id);
  res.send(selectedItems);
});
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedItem = courses.find((cr) => cr.id == id);
  res.send(selectedItem);
});

app.get("/questions", (req, res) => {
  res.send(questions);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("learning programing server is running on: ", port);
});
