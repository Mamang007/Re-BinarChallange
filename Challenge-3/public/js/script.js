// mengacak array
let arr = ["com-batu", "com-gunting", "com-kertas"];
let i = 0;
let hasil = document.getElementById("hasil");

// Rotasi komputer sebelum dijalankan
function acakCom() {
  if (i === 3) {
    i = 0;
  } else {
    document.getElementById(arr[i]).classList.add("pilihan");
    if (i == 0) {
      document.getElementById(arr[1]).classList.remove("pilihan");
      document.getElementById(arr[2]).classList.remove("pilihan");
    } else if (i == 1) {
      document.getElementById(arr[0]).classList.remove("pilihan");
      document.getElementById(arr[2]).classList.remove("pilihan");
    } else if (i == 2) {
      document.getElementById(arr[0]).classList.remove("pilihan");
      document.getElementById(arr[1]).classList.remove("pilihan");
    }
    i++;
  }
}

// Fungsi Menang-Kalah-Seri
function menang() {
  hasil.classList.add("hasil-permainan");
  hasil.innerHTML = "PLAYER<br>MENANG";
}
function kalah() {
  hasil.classList.add("hasil-permainan");
  hasil.innerHTML = "COM<br>MENANG";
}
function seri() {
  hasil.classList.add("hasil-permainan");
  hasil.innerHTML = "SERI";
}

// Selector Player - COM
let playerBatu = document.getElementById("player-batu"),
  playerGunting = document.getElementById("player-gunting"),
  playerKertas = document.getElementById("player-kertas"),
  comBatu = document.getElementById("com-batu"),
  comGunting = document.getElementById("com-gunting"),
  comKertas = document.getElementById("com-kertas");

function batuClick() {
  let hasil = Math.floor(Math.random() * 3 + 1);

  // Mengeksekusi fungsi acakCom setiap 0,2 detik
  let intervalId = setInterval(acakCom, 100);

  // Menghentikan setInterval setelah 3 detik
  setTimeout(function () {
    clearInterval(intervalId);

    playerBatu.classList.add("pilihan");
    playerGunting.classList.remove("pilihan");
    playerKertas.classList.remove("pilihan");
    comBatu.classList.remove("pilihan");
    comGunting.classList.remove("pilihan");
    comKertas.classList.remove("pilihan");

    if (hasil === 1) {
      comBatu.classList.add("pilihan");
      seri();
    } else if (hasil === 2) {
      comGunting.classList.add("pilihan");
      menang();
    } else {
      comKertas.classList.add("pilihan");
      kalah();
    }
  }, 3000);
}

function guntingClick() {
  let hasil = Math.floor(Math.random() * 3 + 1);

  // Mengeksekusi fungsi acakCom setiap 0,2 detik
  let intervalId = setInterval(acakCom, 100);

  // Menghentikan setInterval setelah 3 detik
  setTimeout(function () {
    clearInterval(intervalId);

    playerGunting.classList.add("pilihan");
    playerBatu.classList.remove("pilihan");
    playerKertas.classList.remove("pilihan");
    comBatu.classList.remove("pilihan");
    comGunting.classList.remove("pilihan");
    comKertas.classList.remove("pilihan");

    if (hasil === 1) {
      comBatu.classList.add("pilihan");
      kalah();
    } else if (hasil === 2) {
      comGunting.classList.add("pilihan");
      seri();
    } else {
      comKertas.classList.add("pilihan");
      menang();
    }
  }, 3000);
}
function kertasClick() {
  let hasil = Math.floor(Math.random() * 3 + 1);

  // Mengeksekusi fungsi acakCom setiap 0,2 detik
  let intervalId = setInterval(acakCom, 100);

  // Menghentikan setInterval setelah 3 detik
  setTimeout(function () {
    clearInterval(intervalId);

    playerKertas.classList.add("pilihan");
    playerBatu.classList.remove("pilihan");
    playerGunting.classList.remove("pilihan");
    comBatu.classList.remove("pilihan");
    comGunting.classList.remove("pilihan");
    comKertas.classList.remove("pilihan");

    if (hasil === 1) {
      comBatu.classList.add("pilihan");
      menang();
    } else if (hasil === 2) {
      comGunting.classList.add("pilihan");
      kalah();
    } else {
      comKertas.classList.add("pilihan");
      seri();
    }
  }, 3000);
}
