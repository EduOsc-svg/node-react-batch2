
// Soal 4
console.log("--- SOAL 4 ---");
console.log("LOOPING PERTAMA");
var i = 2;
while (i <= 20) {
    console.log(i + " - I love coding");
    i += 2;
}

console.log("\n LOOPING KEDUA");
var j = 20;
while (j >= 2) {
    console.log(j + " - I will become fullstack developer");
    j -= 2;
}
console.log("\n" + "=".repeat(50) + "\n");

// Soal 5
console.log("--- SOAL 5 ---");

var k = 1;
while (k <= 20) {
    if (k % 2 === 1) {
        console.log(k + " - Angka Ganjil");
    } else {
        console.log(k + " - Angka Genap");
    }
    k++;
}

console.log("\n" + "=".repeat(50) + "\n");

// Soal 6
console.log("--- SOAL 6 ---");
for (var l = 1; l <= 20; l++) {
    if (l % 3 === 0 && l % 2 === 1) {
        console.log(l + " - I Love Coding.");
    } else if (l % 3 === 0 && l % 2 === 0) {
        console.log(l + " - ToT");
    } else if (l % 2 === 1) {
        console.log(l + " - Santai");
    } else {
        console.log(l + " - Berkualitas");
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// Soal 7
console.log("--- SOAL 7 ---");
var text = "";
for (var i = 1; i <= 7; i++) {
  text += " ".repeat(7 - i) + "#".repeat(2 * i - 1) + "\n";
}
console.log(text);

console.log("\n" + "=".repeat(50) + "\n");

// Soal 8
console.log("--- SOAL 8 ---");
var sentence = "Fullstack Developer";
HanyaKonsonan = function(str) {
    var consonants = '';
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (!char.match(/[aiueo ]/)) {
            consonants += char;
        }
    }
    return consonants;
}
console.log(HanyaKonsonan(sentence));