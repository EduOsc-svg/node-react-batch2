// Soal 14
console.log("" + "=".repeat(50) + "");
console.log("--- SOAL 14 ---");
var john = introduce("John", "laki-laki", "penulis", "30");
var Sarah = introduce("Sarah", "perempuan", "model", "29");
function introduce(name, gender, hobby, age) {
    return  name + " adalah seorang " + hobby + " yang berumur " + age + " tahun";
}
console.log(john);
console.log(Sarah);

// Soal 15 expected output: rbmfkdv0
console.log("" + "=".repeat(50) + "");
console.log("--- SOAL 15 ---");
var text = "Super Bootcamp Fullstack Dev 2022";
var textKecil = text.toLowerCase();
var TimpaSpasi = textKecil.replace(" ", "");
var result = "";
for (var i = 1; i < textKecil.length; i++) {
    var char = textKecil.charAt(i);
    if (textKecil.indexOf(char) === textKecil.lastIndexOf(char)) {
        result += char;
    }
    
}
console.log("Kalimat Setelah Dihilangkan Huruf yang Sama: " + result);
console.log("" + "=".repeat(50) + "");

// Soal 16
console.log("--- SOAL 16 ---");
var angka = [2,3,1,9,12,8,9,7]
angka.max = function() {
    var max = this[0];
    for (var i = 1; i < this.length; i++) {
        if (this[i] > max) {
            max = this[i];
        }
    }
    return max;
}
angka.min = function() {
    var min = this[0];
    for (var i = 1; i < this.length; i++) {
        if (this[i] < min) {
            min = this[i];
        }
    }
    return min;
}
console.log("Angka Terbesar adalah " + angka.max());
console.log("Angka Terkecil adalah " + angka.min());

console.log("" + "=".repeat(50) + "");

// Soal 17
console.log("--- SOAL 17 ---");
function arrangeString (str) {
    var arr = str.split("").sort();
    return arr.join("");
}
console.log(arrangeString("bahasa")) // Output : aaabhs
console.log(arrangeString("similikiti")) // Output : iiiiiklmst
console.log(arrangeString("sanbercode")) // Output : abcdeenors
console.log(arrangeString(`""`)) // Output : ""
console.log("" + "=".repeat(50) + "");

// Soal 18
console.log("--- SOAL 18 ---");
function palindrome(kata) {
  var reversed = kata.split("").reverse().join("");
  return kata === reversed;
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('nababan')); // true
console.log(palindrome('haji ijah')); // true
console.log(palindrome('mister')); // false

console.log("" + "=".repeat(50) + "");

// Soal 19
console.log("--- SOAL 19 ---");
function angkaPalindrome(num) {
  // you can only write your code here!
  while (true) {
    num++;
    if (palindrome(num.toString())) {
      return num;
    }
  }
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

console.log("" + "=".repeat(50) + "");

// Soal 20
console.log("--- SOAL 20 ---");
function cekPermutasi(str1, str2) {
  // you can only write your code here!
    var arr1 = str1.split("").sort().join("");
    var arr2 = str2.split("").sort().join("");
    return arr1 === arr2;
}
console.log(cekPermutasi("abah", "baha")) // true
console.log(cekPermutasi("ondel", "delon")) // true
console.log(cekPermutasi("paul sernine", "arsene lupin")) // true
console.log(cekPermutasi("taco", "taca")) // false
console.log("" + "=".repeat(50) + "");