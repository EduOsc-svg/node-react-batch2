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

// Memanggil fungsi dengan nomor antrian 3
// error dan message adalah parameter dari callback function
PeriksaDokter(3, (error, message) => {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
});

