//Mencoba index.js berjalan dengan node
console.log("Hello World!");

//Import Module bernama 'os' (berfungsi untuk mengetahui sisa memory)
const os = require("os");
console.log("Free Memory:", os.freemem());

//Import segitiga.js untuk menghitung segitiga berikut
const luasSegiTiga = require("./segitiga.js");

console.log(luasSegiTiga(3, 4));

//Read & Write File System (fs)
const fs = require("fs");

//Read File (Membuat file text.txt di directory, kemudian akan dibaca oleh .readFileSync)
const isi = fs.readFileSync("./text.txt", "utf-8");

console.log(isi);

//Write File (Jika file test.txt tidak ada, maka akan dibuatkan)
fs.writeFileSync("./test.txt", "Mamang Programming");
console.log("--Membuat file test.txt menggunakan writeFileSync--");
const isi2 = fs.readFileSync("./test.txt", "utf-8");

console.log(isi2);

//Import createPerson.js dalam bentuk JSON
// const fs = require("fs"); //Sudah dideklarasikan sebelumnya
const createPerson = require("./createPerson");
console.log("---File person.json telah dibuat..");
const Mamang = createPerson({
  name: "Mamang",
  age: 25,
  address: "Bekasi",
});

const result = require("./person.json");
console.log(result);
