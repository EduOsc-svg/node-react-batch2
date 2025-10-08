
// Soal 21 Array Object
console.log("--- SOAL 21 - Array Object ---");
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

console.log("\n" + "=".repeat(50) + "\n");

// Soal 22 
console.log("--- SOAL 22 ---");
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
console.log("\n" + "=".repeat(50) + "\n");
// Soal 23
console.log("--- SOAL 23 ---");

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
console.log("\n" + "=".repeat(50) + "\n");

// Soal 24
console.log("--- SOAL 24 ---");

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
console.log("\n" + "=".repeat(50) + "\n");
console.log("--- SOAL 25 ---");

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
console.log("--- SOAL 26 ---");
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


