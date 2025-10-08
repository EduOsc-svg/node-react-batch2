
// Soal 1
var perkenalan = 'Nama saya adalah';
var nama = "Oscar Farassendra" // isi dengan nama kalian
var kata1 = "saya"
var kata2 = "berharap"
var kata3 = "untuk"
var kata4 = "menjadi"
var kata5 = "seorang"
var kata6 = "software"
var kata7 = "engineer"

var kalimatLengkap = perkenalan + " " + nama + ", " + kata1 + " " + kata2 + " " + kata3 + " " + kata4 + " " + kata5 + " " + kata6 + " " + kata7;
console.log("Soal 1\n" + kalimatLengkap + "\n");

console.log("=====================================\n");

// Soal 2
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789";

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("Soal 2\n" + "password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10];
console.log("password ke dua: "+ password2 )

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4];
console.log("password ke tiga: " + password3);

console.log("=====================================\n");
// Soal 3 Mengurai Kalimat (Substring)
var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 21);
var fifthWord2 = sentence2.substring(21, 26);

console.log("Soal 3\n" + 'First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);


console.log("=====================================\n");

// Soal 4 Mengurai Kalimat dan Menentukan Panjang String
console.log("Soal 4");
var sentence3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 26);

var firstWordLength = exampleFirstWord3.length
// lanjutkan buat variable lagi di bawah ini
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWord3.length);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWord3.length);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWord3.length);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWord3.length);


console.log("=====================================\n");
console.log("Soal 5");
// Soal No. 5 Kode Password (Mencari indeks karakter)
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
console.log("kode 1: " + kode1)

// kode 1: 7-4-11-11-14

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D")
console.log("kode 2: " + kode2)

// 3. password ketiga : IMREADY
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y")
console.log("kode 3: " + kode3)


console.log("=====================================\n");

// Soal No. 6 Mengubah string
console.log("Soal 6");
var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";
var kalimat = pertama.charAt(0).toUpperCase() + pertama.substring(1) + " " + kedua.charAt(0).toUpperCase() + kedua.substring(1, 5) + kedua.charAt(5).toUpperCase() + " " + ketiga.charAt(0).toUpperCase()  +ketiga.substring(1, 6) + ketiga.charAt(6).toUpperCase() + " " + keempat.toUpperCase();
console.log(kalimat);


console.log("=====================================\n");

// Soal 7 Konversi String ke integer
console.log("Soal 7");
var panjang= "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";
alas = parseInt(alas);
tinggi = parseInt(tinggi);
panjang = parseInt(panjang);
lebar = parseInt(lebar);

// hitung luas persegi panjang dan segitiga
var luasPersegiPanjang = panjang * lebar;
var luasSegitiga = 0.5 * alas * tinggi;
console.log("Luas Persegi Panjang: " + luasPersegiPanjang);
console.log("Luas Segitiga: " + luasSegitiga);


console.log("=====================================\n");

// Soal 8 Konversi String menggunakan Number dan parseFloat
console.log("Soal 8");
var sisi= " 1 2 ";
var jariJari= "7.5";
// hapus seluruh spasi dari variabel sisi ke tipe data integer menggunakan method Number lalu lakukan perhitungan luas persegi
sisi = Number(sisi.replace(/\s/g, ""));
var luasPersegi = sisi * sisi;
console.log("Luas Persegi: " + luasPersegi);

// ubahlah variabel jariJari ke tipe data float lalu lakukan perhitungan luas lingkaran
jariJari = parseFloat(jariJari);
var luasLingkaran = Math.PI * jariJari * jariJari;
console.log("Luas Lingkaran: " + luasLingkaran);

// Soal 1
var perkenalan = 'Nama saya adalah';
var nama = "Oscar Farassendra" // isi dengan nama kalian
var kata1 = "saya"
var kata2 = "berharap"
var kata3 = "untuk"
var kata4 = "menjadi"
var kata5 = "seorang"
var kata6 = "software"
var kata7 = "engineer"

var kalimatLengkap = perkenalan + " " + nama + ", " + kata1 + " " + kata2 + " " + kata3 + " " + kata4 + " " + kata5 + " " + kata6 + " " + kata7;
console.log("Soal 1\n" + kalimatLengkap + "\n");

console.log("=====================================\n");

// Soal 2
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789";

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("Soal 2\n" + "password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10];
console.log("password ke dua: "+ password2 )

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4];
console.log("password ke tiga: " + password3);

console.log("=====================================\n");
// Soal 3 Mengurai Kalimat (Substring)
var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 21);
var fifthWord2 = sentence2.substring(21, 26);

console.log("Soal 3\n" + 'First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);


console.log("=====================================\n");

// Soal 4 Mengurai Kalimat dan Menentukan Panjang String
console.log("Soal 4");
var sentence3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 26);

var firstWordLength = exampleFirstWord3.length
// lanjutkan buat variable lagi di bawah ini
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWord3.length);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWord3.length);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWord3.length);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWord3.length);


console.log("=====================================\n");
console.log("Soal 5");
// Soal No. 5 Kode Password (Mencari indeks karakter)
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
console.log("kode 1: " + kode1)

// kode 1: 7-4-11-11-14

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D")
console.log("kode 2: " + kode2)

// 3. password ketiga : IMREADY
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y")
console.log("kode 3: " + kode3)


console.log("=====================================\n");

// Soal No. 6 Mengubah string
console.log("Soal 6");
var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";
var kalimat = pertama.charAt(0).toUpperCase() + pertama.substring(1) + " " + kedua.charAt(0).toUpperCase() + kedua.substring(1, 5) + kedua.charAt(5).toUpperCase() + " " + ketiga.charAt(0).toUpperCase()  +ketiga.substring(1, 6) + ketiga.charAt(6).toUpperCase() + " " + keempat.toUpperCase();
console.log(kalimat);


console.log("=====================================\n");

// Soal 7 Konversi String ke integer
console.log("Soal 7");
var panjang= "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";
alas = parseInt(alas);
tinggi = parseInt(tinggi);
panjang = parseInt(panjang);
lebar = parseInt(lebar);

// hitung luas persegi panjang dan segitiga
var luasPersegiPanjang = panjang * lebar;
var luasSegitiga = 0.5 * alas * tinggi;
console.log("Luas Persegi Panjang: " + luasPersegiPanjang);
console.log("Luas Segitiga: " + luasSegitiga);


console.log("=====================================\n");

// Soal 8 Konversi String menggunakan Number dan parseFloat
console.log("Soal 8");
var sisi= " 1 2 ";
var jariJari= "7.5";
// hapus seluruh spasi dari variabel sisi ke tipe data integer menggunakan method Number lalu lakukan perhitungan luas persegi
sisi = Number(sisi.replace(/\s/g, ""));
var luasPersegi = sisi * sisi;
console.log("Luas Persegi: " + luasPersegi);

// ubahlah variabel jariJari ke tipe data float lalu lakukan perhitungan luas lingkaran
jariJari = parseFloat(jariJari);
var luasLingkaran = Math.PI * jariJari * jariJari;
console.log("Luas Lingkaran: " + luasLingkaran);