
//first class function
// Soal 1 
console.log("=".repeat(50));
console.log("Soal 1 first class function");
function Persegi(sisi) {
  this.sisi = sisi;

  this.hitungLuas = function() {
    return this.sisi * this.sisi;
  };
}
function PersegiPanjang(panjang, lebar) {
  this.panjang = panjang;
  this.lebar = lebar;

  this.hitungLuas = function() {
    return this.panjang * this.lebar;
  };
}

console.log(`Luas Persegi: ${new Persegi(8).hitungLuas()}`);
console.log(`Luas Persegi Panjang: ${new PersegiPanjang(12,7).hitungLuas()}`);

// Soal 2
console.log("=".repeat(50));
console.log("Soal 2");
function hitungKubus(sisi) {
  const persegi = new Persegi(sisi);
  const luasPersegi = persegi.hitungLuas();
  const volumeKubus = luasPersegi * sisi;
  console.log(`Volume Kubus: ${volumeKubus}`);
}
function HitungBalok(panjang, lebar, tinggi) {
  const persegiPanjang = new PersegiPanjang(panjang, lebar);
  const luasPersegiPanjang = persegiPanjang.hitungLuas();
  const volumeBalok = luasPersegiPanjang * tinggi;
  console.log(`Volume Balok: ${volumeBalok}`);
}
hitungKubus(8)
HitungBalok(12,7, 5)

// Soal 3 Recursive Function 
//  munculkan hanya nama saja beserta nomor urut nya
console.log("=".repeat(50));
console.log("Soal 3");
function countUp(num) {
  var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]
 for (let i = 0; i < num; i++) {
  //sort by age
  people.sort((a, b) => a.age - b.age);
  console.log("No." + (i + 1) + " " + people[i].name);
  
 }
}
countUp(5);

console.log("=".repeat(50));
// Soal 4
console.log("Soal 4");

function countUp2(n) {

var phones=[
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]

  for (let i = 0; i < n; i++) {
    phones.sort((a, b) => a.year - b.year);
    if (phones[i].colors.includes("black")) {
      console.log(`${phones[i].name} - colors available: ${phones[i].colors.join(", ")}`);
    }
  }
}
countUp2(5);
console.log("=".repeat(50));