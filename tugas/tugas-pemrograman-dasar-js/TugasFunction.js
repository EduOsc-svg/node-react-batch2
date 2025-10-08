// Soal 1
console.log("\nTugas Pemrograman Dasar JavaScript\n");
console.log("Soal 1\n");
var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

if (sentence.length < 10) {
    console.log("Panjang String: Pendek");
} else if (sentence.length >= 10 && sentence.length <= 30) {
    console.log("Panjang String: Sedang");
} else {
    console.log("Panjang String: Panjang");
}

console.log("\n=====================\n");

// Soal 2
var nilai;
console.log("Soal 2\n");
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
console.log("\n=====================\n");
// Soal 3
console.log("\nSoal 3\n");

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
console.log("\n=====================\n");

// Soal 4
console.log("\nSoal 4\n");
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
console.log("\n=====================\n");

// Soal 5

console.log("\nSoal 5\n");

var k = 1;
while (k <= 20) {
    if (k % 2 === 1) {
        console.log(k + " - Angka Ganjil");
    } else {
        console.log(k + " - Angka Genap");
    }
    k++;
}

console.log("\n=====================\n");
// Soal 6
console.log("\nSoal 6\n");
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

console.log("\n=====================\n");
// Soal 7
console.log("\nSoal 7\n");
var text = "";
for (var i = 1; i <= 7; i++) {
  text += " ".repeat(7 - i) + "#".repeat(2 * i - 1) + "\n";
}
console.log(text);

console.log("\n=====================\n");

// Soal 8
console.log("\nSoal 8\n");
var sentence = "Fullstack Developer";
HanyaKonsonan = function(str) {
    var consonants = '';
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (char.match(/[aiueo]/)) {
            consonants += char;
        }
    }
    return consonants;
}
console.log(HanyaKonsonan(sentence));

console.log("\n=====================\n");

// Soal 9
console.log("\nSoal 9\n");
var dataPeserta = ["john", "laki-laki", "programmer", "30"];
var output = "Halo, nama saya " + dataPeserta[0] + ". saya " + dataPeserta[1] + " berumur " + dataPeserta[3] + " bekerja sebagai seorang " + dataPeserta[2] + ".";
console.log(output);

console.log("\n=====================\n");

// Soal 10
console.log("\nSoal 10\n");
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

console.log("\n=====================\n");

// Soal 11
console.log("\nSoal 11\n");
sayuran.sort();
for (var j = 0; j < sayuran.length; j++) {
    console.log((j + 1) + ". " + sayuran[j]);
}

console.log("\n=====================\n");

// Soal 12
console.log("\nSoal 12\n");
var word = "car";
var result = [];
for (var i = 0; i < word.length; i++) {
    for (var j = i + 1; j <= word.length; j++) {
        result.push(word.slice(i, j));
    }
}
console.log(result);

console.log("\n=====================\n");

// Soal 13
console.log("\nSoal 13\n");
var numbers = [ 4,5,1,4,6,8,9,21];
console.log(sum(numbers));
function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

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

console.log("\n=====================\n");

// Soal 14
console.log("\nSoal 14\n");
var john = introduce("John", "laki-laki", "penulis", "30");
var Sarah = introduce("Sarah", "perempuan", "model", "29");
function introduce(name, gender, hobby, age) {
    return  name + " adalah seorang " + hobby + " yang berumur " + age + " tahun";
}
console.log(john);
console.log(Sarah);

// Soal 15 temukan huruf yang sama dalam kalimat dibawah ini lalu hilangkan
console.log("\nSoal 15\n");
var text = "Super Bootcamp Fullstack Dev 2022";
function findHuruf(text) {
    var result = "";
   
}

console.log(findHuruf(text));

console.log("\n=====================\n");

// Soal 16
console.log("\nSoal 16\n");
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

console.log("\n=====================\n");

// Soal 17
console.log("\nSoal 17\n");
function arrangeString (str) {
    var arr = str.split("").sort();
    return arr.join("");
}
console.log(arrangeString("bahasa")) // Output : aaabhs
console.log(arrangeString("similikiti")) // Output : iiiiiklmst
console.log(arrangeString("sanbercode")) // Output : abcdeenors

console.log("\n=====================\n");

// Soal 18
console.log("\nSoal 18\n");
function palindrome(kata) {
  var reversed = kata.split("").reverse().join("");
  return kata === reversed;
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('nababan')); // true
console.log(palindrome('haji ijah')); // true
console.log(palindrome('mister')); // false

var enterr = "\n=====================\n";
console.log(enterr);
// Soal 19
console.log("Soal 19\n");
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


// Soal 20
console.log("Soal 20\n");
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

// Soal 21 Array Object
console.log("\nSoal 21\n");
Buah = [
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: false,
        harga: 9000
    },  
    {
        nama: "Jeruk",
        warna: "Oranye",
        adaBijinya: true,
        harga: 8000
    },  
    {
        nama: "Apel",
        warna: "Merah",
        adaBijinya: true,
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: false,
        harga: 5000
    }
];

console.log(Buah.filter(function(b) {
    return b.adaBijinya === false;
}));

// Soal 22 
console.log("\nSoal 22\n");
var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

function tambahDataFilm(nama, durasi, genre, tahun) {
    var film = {
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    }
    dataFilm.push(film);
}
console.log(dataFilm)

// Soal 23
console.log("\nSoal 23\n");

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

var filterByAge = people.filter(function(person) {
    return person.age > 29;
});
console.log(filterByAge);


// Soal 24
console.log("\nSoal 24\n");

function averageAge(people) {
    var totalAge = people.reduce(function(sum, person) {
        return sum + person.age;
    }, 0);
    return totalAge / people.length;
}
console.log(averageAge(people));

function SortByAge(people) {
    return people.sort(function(a, b) {
        return a.age - b.age;
    });
}

// Soal 25
console.log("\nSoal 25\n");

function TheNamefromyounger(people) {
    var sortedPeople = SortByAge(people);
    return sortedPeople.map(function(person) {
        return person.name;
    });
   
}

for (var i = 1; i <= people.length; i++) {
    console.log(i + ". " + TheNamefromyounger(people)[i - 1]);
}
console.log("\n=====================\n");

// Soal 26

var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}
/*
 buatlah function anda disini
*/
function addColors(color) {
    phone.colors.push(color);
}
addColors("Gold")
addColors("Silver")
addColors("Brown")
console.log(phone)


