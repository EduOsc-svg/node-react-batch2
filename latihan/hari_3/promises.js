// promise example
function PeriksaDokter(nomorAntrian) {
  return new Promise((resolve, reject) => {
    if (nomorAntrian === 5) {
      setTimeout(() => {
        resolve("Silakan masuk, nomor antrian Anda: " + nomorAntrian);
      }, 2000); // simulate delay of 2 seconds
    } else {
      setTimeout(() => {
        reject("Maaf, nomor antrian Anda sudah lewat.");
      }, 2000); // simulate delay of 2 seconds
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

  // Contoh Promise dengan data object in array
  const pasien = [
    { nama: "John", nomorAntrian: 1 },
    { nama: "Micheal", nomorAntrian: 2 },
    { nama: "Sarah", nomorAntrian: 3 },
    { nama: "Frank", nomorAntrian: 4 }
  ];

  function PeriksaDokterObj(nomorAntrian) {
    return new Promise((resolve, reject) => {
      const pasienDitemukan = pasien.find(p => p.nomorAntrian === nomorAntrian);
      if (pasienDitemukan) {
        setTimeout(() => {
          resolve(`Silakan masuk, ${pasienDitemukan.nama}, nomor antrian Anda: ${pasienDitemukan.nomorAntrian}`);
        }, 2000);
      } else {
        setTimeout(() => {
          reject("Maaf, nomor antrian Anda sudah lewat.");
        }, 2000);
      }
    });
  }

  PeriksaDokterObj(3)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });