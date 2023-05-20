//Program pertama: Asynchronus Process
console.log("Hello Binarian!");

//menggunakan time out 100 millisecond, sehingga akan muncul setelah 0,1 detik
setTimeout(() => {
  console.log("Javascript");
}, 100);

console.log("Developer");

//Program kedua
console.log("Aku keluar pertama");

setTimeout(() => {
  console.log("Aku keluar setelah 3 detik");
}, 3000);
setTimeout(() => {
  console.log("Apakah aku yang kedua?");
}, 0);

console.log("Apakah aku yang ketiga?");
//Hasil akan ditampilkan secara Asynchronus dan sesuai timeout terkecil

//Program ketiga: setInterval
let a = 0;
const iniInterval = setInterval(() => {
  console.log(`${++a} kali jalan`);
  if (a === 10) clearInterval(iniInterval);
}, 100);

console.log("Apakah aku jalan duluann?");
