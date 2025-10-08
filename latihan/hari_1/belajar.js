
var nama = "John Doe";
var umur = 30;

console.log("Nama: " + nama);
console.log("Umur: " + umur + " tahun");

// Console Menampilkan Konsep Boolean
var isStudent = true;
console.log("Apakah saya seorang pelajar? " + isStudent);

// Console Menampilkan Konsep Array
var hobi = ["Membaca", "Bersepeda", "Memasak"];
console.log("Hobi saya: " + hobi.join(", "));


// Console Menampilkan Konsep And dan Or
var sukaMembaca = true;
var sukaBersepeda = false;
var sukaMemasak = true;
var sukaOlahraga = true;

var sukaSemuaHobi = sukaMembaca && sukaBersepeda && sukaMemasak;
var sukaSalahSatuHobi = sukaMembaca || sukaBersepeda || sukaMemasak || sukaOlahraga;
console.log("Apakah saya suka semua hobi? " + sukaSemuaHobi);
console.log("Apakah saya suka salah satu hobi? " + sukaSalahSatuHobi);

// Console Menampilkan Konsep Arithmetic
var a = 10;
var b = 5;
var penjumlahan = a + b;
var pengurangan = a - b;
var perkalian = a * b;
var pembagian = a / b;
console.log("Penjumlahan: " + penjumlahan);
console.log("Pengurangan: " + pengurangan);
console.log("Perkalian: " + perkalian);
console.log("Pembagian: " + pembagian);

// Console Menampilkan Fungsi Length dan charAt dan concat
var kata = "JavaScript";
console.log("Panjang kata '" + kata + "': " + kata.length);
console.log("Karakter pertama: " + kata.charAt(0));
console.log("Karakter terakhir: " + kata.charAt(kata.length - 1));
console.log("Karakter ke-4: " + kata.charAt(3));
var kataLain = " adalah bahasa pemrograman.";
var gabungan = kata.concat(kataLain);
console.log("Gabungan kata: " + gabungan);

// Console Menampilkan Fungsi semuua String
var kalimat = "Belajar JavaScript itu menyenangkan!";
console.log("Kalimat: " + kalimat);
console.log("Kalimat dalam huruf besar: " + kalimat.toUpperCase());
console.log("Kalimat dalam huruf kecil: " + kalimat.toLowerCase());
console.log("Kalimat setelah diganti: " + kalimat.replace("menyenangkan", "seru"));
console.log("Kalimat setelah di-split: " + kalimat.split(" ").join(", "));
console.log("Kalimat setelah di-split: " + kalimat.split(",").join(""));
console.log("Apakah kalimat mengandung 'JavaScript'? " + kalimat.includes("JavaScript"));
console.log("Apakah kalimat mengandung 'Python'? " + kalimat.includes("Python"));
console.log("Index of 'JavaScript': " + kalimat.indexOf("JavaScript"));
console.log("Index of 'Python': " + kalimat.indexOf("Python"));
console.log("Kalimat dimulai dengan 'Belajar'? " + kalimat.startsWith("Belajar"));
console.log("Kalimat diakhiri dengan 'menyenangkan!'? " +
    kalimat.endsWith("menyenangkan!"));
console.log("Kalimat setelah di-trim: '" + "   " + kalimat + "   ".trim() + "'");
console.log("Substring (0, 7): " + kalimat.substring(0, 7));
console.log("Substring (8): " + kalimat.substring(8));
console.log("Karakter ke-5: " + kalimat.charAt(4));
console.log("Karakter ke-10: " + kalimat.charAt(9));
console.log("Karakterr ke-15: " + kalimat.charAt(14));


