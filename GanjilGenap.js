const readline = require('readline');

function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    console.log(`${angka} tu genap tod.`);
  } else {
    console.log(`${angka} tu ganjil jir.`);
  }
}

// Buat interface untuk membaca input dari user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Minta input dari user
rl.question('Masukin angka kesukaan lo: ', (input) => {
  const angka = parseInt(input);

  if (!isNaN(angka)) {
    cekGanjilGenap(angka);
  } else {
    console.log("Salah goblok.");
  }

  rl.close(); // tutup input setelah selesai
});
