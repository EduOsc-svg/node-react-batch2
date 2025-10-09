// promise example
function PeriksaDokter(nomorAntrian) {
  return new Promise((resolve, reject) => {
    if (nomorAntrian === 5) {
      setTimeout(() => {
        resolve("Silakan masuk, nomor antrian Anda: " + nomorAntrian);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Maaf, nomor antrian Anda sudah lewat.");
      }, 2000);
    }
  });
}

PeriksaDokter(5)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
