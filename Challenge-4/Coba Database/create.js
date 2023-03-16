const { Articles } = require("./models");
const express = require("express");
const app = express();

Articles.create({
  title: "Hello World",
  body: "Lorem Ipsum Dolor Sit Amet",
  approved: true,
}).then((article) => {
  console.log(article);
});
