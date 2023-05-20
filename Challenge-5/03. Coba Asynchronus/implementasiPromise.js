// Callback function yang berisi resolve dan reject
// Perbedaannya adalah Promise akan selalu berjalan secara async, berbeda dengan callback pada umumya

//Program Pertama
const myPromise = new Promise((resolve) => resolve("Hello World"));

// Karena tidak ada reject, maka kita tidak perlu menulis .catch
myPromise.then((resolve) => {
  console.log("Hello World");
});

//Program kedua
function isPasswordCorrect(password) {
  return new Promise((resolve, reject) => {
    console.log("Password:", password);
    if (password !== "123456") return reject("Wrong Password!");

    resolve("Password is Correct!");
  });
}

//Password Benar
isPasswordCorrect("123456")
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.error(reject));
//Password Salah
isPasswordCorrect("654789")
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.error(reject));

//Program ketiga: Implementasi Async-Await, sehingga tidak perlu menggunakan .then dan .catch lagi
let punyaBuku = false;
//Function beliBuku
const beliBuku = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      punyaBuku = true;
    }, 1000);
  });
//Function gambar meminta judul sebagai parameter
//Mengambil Promise
const gambar = (judul) => {
  if (!punyaBuku) return Promise.reject("Gak punya buku");
  return Promise.resolve({
    id: Date.now(),
    title: judul,
    createdAt: Date(),
  });
};

//Function utama akan menjalankan function yang lain
async function main() {
  if (!punyaBuku) await beliBuku();
  const hasilGambar = await gambar("Doraeman");
  console.log(hasilGambar);
}

main();

//Kedua
async function main() {
  try {
    // if (!punyaBuku) await beliBuku();
    const hasilGambar = await gambar("Doraemon");
    console.log(hasilGambar);
  } catch (err) {
    console.log("Beli buku dulu dong!");
  }
}

main();
