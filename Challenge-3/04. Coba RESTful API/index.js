const express = require("express");
const { json } = require("stream/consumers");
let posts = require("./posts.json");
const app = express();

app.use(express.json());

//Mengambil seluruh database json di posts.json
app.get("/api/v1/posts", (req, res) => {
  res.status(200).json(posts);
});

//Mengambil detail database json di posts.json menggunakan ID
app.get("/api/v1/posts/:id", (req, res) => {
  const post = posts.find((i) => i.id == +req.params.id);
  res.status(200).json(post);
});

//Melakukan POST data ke database
app.post("/api/v1/posts", (req, res) => {
  /*Untuk menghandle request body, dapat dipanggil menggunakan req. body*/
  const { tittle, body } = req.body;
  console.log(req.body);

  //Mendapatkan ID
  const id = posts[posts.length - 1].id + 1;
  const post = {
    id,
    tittle,
    body,
  };
  //Push ke dalam database array posts.json
  posts.push(post);
  //Response status menjadi 201, karena menambah entry baru ke resource
  res.status(201).json(post);
});

//Melakukan UPDATE data berdasarkan id
app.put("/api/v1/posts/:id", (req, res) => {
  let post = posts.find((i) => i.id == +req.params.id);
  //Untuk menghindari parameter yang tidak kita inginkan
  const params = {
    tittle: req.body.tittle,
    body: req.body.body,
  };
  post = { ...post, ...params };
  //Update post resource lagi
  posts = posts.map((i) => (i.id == post.id ? post : i));
  res.status(200).json(post);
});

//Menghapus DELETE data berdasarkan id
app.delete("/api/v1/posts/:id", (req, res) => {
  posts = posts.filter((i) => i.id == +req.params.id);
  res.status(200).json({
    message: `Post dengan id ${req.params.id} sudah berhasil dihapus!`,
  });
});

app.listen(3000, () => {
  console.log("Server nyala di port 3000..");
});
