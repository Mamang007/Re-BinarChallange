const { Article } = require("./models");

Article.findAll().then((article) => console.log(article));

Article.findOne({
  where: { id: 1 },
}).then((article) => console.log(article));
