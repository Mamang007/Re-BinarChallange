const { Article } = require("./models");

Article.create({
  tittle: "Hello World",
  body: "Lorem Ipsum Dolor Sit Amet",
  approved: true,
}).then((article) => {
  console.log(article);
});
