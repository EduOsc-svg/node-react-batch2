// Example of asynchronous behavior in JavaScript

// setTimeout(() => {
//   console.log("Hello");
// }, 1000);
// console.log("World!");

// callback function example
function PeriksaDokter(nomorAntrian, callback) {
  if (nomorAntrian <= 5) {
    callback(null, "Silakan masuk, nomor antrian Anda: " + nomorAntrian);
  } else {
    callback("Maaf, nomor antrian Anda sudah lewat.");
  }
}
PeriksaDokter(3, (error, message) => {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
});

// Contoh Lain Penggunaaan callback
function PeriksaDokter(nomorAntrian, callback) {
    console.log("Menunggu nomor antrian dipanggil...");
    setTimeout(() => {
      if (nomorAntrian === 5) {
        callback(null, "Silakan masuk, nomor antrian Anda: " + nomorAntrian);
      } else {
        callback("Maaf, nomor antrian Anda sudah lewat.");
      }
    }, 2000);
}

PeriksaDokter(5, (error, message) => {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
});


// contoh async await
async function PeriksaDokter(nomorAntrian) {
  try {
    const message = await new Promise((resolve, reject) => {
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
  } catch (error) {
    console.log(error);
  }
}
