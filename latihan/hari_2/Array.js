console.log("====================");
console.log("Latihan Array");
console.log("====================\n");
var angka = [1, 5, 3, 4, 2, 8, 7];
// Menampilkan array dan panjangnya
console.log("Array angka: " + angka);
console.log("Panjang array: " + angka.length);

// Mengakses elemen array
console.log("Elemen pertama: " + angka[0]);
console.log("Elemen ketiga: " + angka[2]);

// Menambahkan elemen ke array
angka.push(6);
console.log("Setelah menambahkan elemen: " + angka);

// Menghapus elemen dari array
angka.pop();
console.log("Setelah menghapus elemen terakhir: " + angka);

//unshift dan shift konsep array
angka.unshift(0);
console.log("Setelah menambahkan elemen di awal: " + angka);
angka.shift();
console.log("Setelah menghapus elemen pertama: " + angka);

//jpoin dan split konsep array
var kata = ["Belajar", "JavaScript", "itu", "menyenangkan", "Sekaliii"];
var kalimat = kata.join(" ");
console.log("Array kata: " + kata);
console.log("Setelah digabung menjadi kalimat: " + kalimat);

var kalimat2 = "Belajar JavaScript itu menyenangkan Sekaliii";
var kata2 = kalimat2.split(" ");
console.log("Kalimat kedua: " + kalimat2);
console.log("Setelah di-split menjadi array: " + kata2);

//sorting array
angka.sort();
console.log("Setelah diurutkan: " + angka);


//splic dan slice konsep array
var buah = ["Pisang", "Jeruk", "Apel", "Mangga", "Semangka"];
console.log("Array buah: " + buah);

var diambil = buah.splice(2, 2);
console.log("Setelah di-splice: " + buah);
console.log("Buah yang diambil: " + diambil);

var diambil2 = buah.slice(1, 3);
console.log("Setelah di-slice: " + buah);
console.log("Buah yang diambil (slice): " + diambil2);