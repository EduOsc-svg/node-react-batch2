
// Soal 9
console.log("--- SOAL 9 ---");
var dataPeserta = ["john", "laki-laki", "programmer", "30"];
var output = "Halo, nama saya " + dataPeserta[0] + ". saya " + dataPeserta[1] + " berumur " + dataPeserta[3] + " bekerja sebagai seorang " + dataPeserta[2] + ".";
console.log(output);

console.log("" + "=".repeat(50) + "");

// Soal 10
console.log("--- SOAL 10 ---");
var sayuran=[]
var i = 0;
sayuran.push(" Kangkung");
sayuran.push(" Bayam");
sayuran.push(" Buncis");
sayuran.push(" Kubis");
sayuran.push(" Timun");
sayuran.push(" Seledri");
sayuran.push(" Tauge");
for (var j = 0; j < sayuran.length; j++) {
    console.log((j + 1) + ". " + sayuran[j]);
}

console.log("" + "=".repeat(50) + "");

// Soal 11
console.log("--- SOAL 11 ---");
sayuran.sort();
for (var j = 0; j < sayuran.length; j++) {
    console.log((j + 1) + ". " + sayuran[j]);
}

console.log("" + "=".repeat(50) + "");

// Soal 12
console.log("--- SOAL 12 ---");
var word = "car";
var result = [];
for (var i = 0; i < word.length; i++) {
    for (var j = i + 1; j <= word.length; j++) {
        result.push(word.slice(i, j));
    }
}
console.log(result);

console.log("" + "=".repeat(50) + "");

// Soal 13
console.log("--- SOAL 13 ---");
var numbers = [ 4,5,1,4,6,8,9,21];
console.log(sum(numbers));
function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
// Soal 14
console.log("" + "=".repeat(50) + "");
console.log("--- SOAL 14 ---");
var kumpulanAngka = [
 [1,3,5,7,8,9],
 [4,5,6,2,3,1],
 [6,7,8,1,3,5],
];
var hasil = [];
for (var i = 0; i < kumpulanAngka.length; i++) {
    hasil.push(sum(kumpulanAngka[i]));
}
console.log(hasil);