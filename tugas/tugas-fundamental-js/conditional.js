// Soal 1
console.log("=".repeat(50));
console.log("    TUGAS PEMROGRAMAN DASAR JAVASCRIPT");
console.log("=".repeat(50));
console.log("\n--- SOAL 1 ---");
var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

if (sentence.length < 10) {
    console.log("Panjang String: Pendek");
} else if (sentence.length >= 10 && sentence.length <= 30) {
    console.log("Panjang String: Sedang");
} else {
    console.log("Panjang String: Panjang");
}

console.log("\n" + "=".repeat(50) + "\n");

// Soal 2
console.log("--- SOAL 2 ---");
var nilai;
if (nilai >= 80) {
    console.log("Indeks: A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("Indeks: B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("Indeks: C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("Indeks: D");
} else {
    console.log("Indeks: E");
}
console.log("\n" + "=".repeat(50) + "\n");

// Soal 3
console.log("--- SOAL 3 ---");

var tanggal = 17;
var bulan = 8;
var tahun = 1945;

    switch (bulan) {
        case 1:
            console.log(tanggal + " Januari " + tahun);
            break;
        case 2:
            console.log(tanggal + " Februari " + tahun);
            break;
        case 3:
            console.log(tanggal + " Maret " + tahun);
            break;
        case 4:
            console.log(tanggal + " April " + tahun);
            break;
        case 5:
            console.log(tanggal + " Mei " + tahun);
            break;
        case 6:
            console.log(tanggal + " Juni " + tahun);
            break;
        case 7:
            console.log(tanggal + " Juli " + tahun);
            break;
        case 8:
            console.log(tanggal + " Agustus " + tahun);
            break;
        case 9:
            console.log(tanggal + " September " + tahun);
            break;
        case 10:
            console.log(tanggal + " Oktober " + tahun);
            break;
        case 11:
            console.log(tanggal + " November " + tahun);
            break;
        case 12:
            console.log(tanggal + " Desember " + tahun);
            break;
        default:
            console.log("Bulan tidak valid");
    }
console.log("\n" + "=".repeat(50) + "\n");