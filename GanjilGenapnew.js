const readline = require('readline');

function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    console.log(`${angka} adalah bilangan genap.`);
  } else {
    console.log(`${angka} adalah bilangan ganjil.`);
  }
}

// Buat interface untuk membaca input dari user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Minta input dari user
rl.question('Masukkan angka : ', (input) => {
  const angka = parseInt(input);

  if (!isNaN(angka)) {
    cekGanjilGenap(angka);
  } else {
    console.log("Input tidak valid, masukkan angka");
  }

  rl.close(); // tutup input setelah selesai
});
