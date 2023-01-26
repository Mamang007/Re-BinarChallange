function batuClick() {
  let hasil = Math.floor(Math.random() * 3 + 1);
  let arr = ["com-batu", "com-gunting", "com-kertas"];

  for (let i = 0; i < arr.length; i++) {
    document.querySelectorAll("div.com")[i].classList.add("pilihan");
  }

  document.getElementById("player-batu").classList.add("pilihan");
  document.getElementById("com-batu").classList.remove("pilihan");
  document.getElementById("com-gunting").classList.remove("pilihan");
  document.getElementById("com-kertas").classList.remove("pilihan");

  if (hasil === 1) {
    document.getElementById("com-batu").classList.add("pilihan");
    console.log("SERI");
  } else if (hasil === 2) {
    document.getElementById("com-gunting").classList.add("pilihan");
    console.log("MENANG");
  } else {
    document.getElementById("com-kertas").classList.add("pilihan");
    console.log("KALAH");
  }
}
function guntingClick() {
  console.log("Ini Gunting");
}
function kertasClick() {
  console.log("Ini Kertas");
}

// Mengacak Angka
function randomNumber() {
  console.log(Math.floor(Math.random() * 100));
}

// mengeksekusi fungsi randomNumber setiap 1 detik
let intervalId = setInterval(randomNumber, 1000);

// menghentikan setInterval setelah 10 detik
setTimeout(function () {
  clearInterval(intervalId);
}, 10000);
