const fs = require("fs");
const option = { encoding: "utf-8" };

//Program pertama
const callback = (err, data) => {
  if (err) return console.error("Error:", err.message);
  console.log("Isi File:", data);
  console.log("Aku muncul ketiga");
};

fs.readFile("contoh.txt", option, callback);

console.log("Aku muncul pertama");

//Program pertama akan berjalan secara Async, untuk ".readFile" adalah function yg Async maka tidak perlu menunggu perintah sebelumnya dijalankan

//Program kedua
console.log("Aku muncul pertama");
const data = fs.readFileSync("contoh.txt", option, callback);
console.log("Isi File:", data);
console.log("Aku muncul ketiga");

//Jika pada baris code 17 diubah menjadi ".readFile" saja, maka dia akan muncul di program pertama
