// arrow function let dan const
// soal 1
console.log("Soal 1 ");
console.log("=".repeat(50));
let luasLingkaran = (r) => {
  const phi = 3.14;
  return phi * r * r;
}

let kelilingLingkaran = (r) => {
  const phi = 3.14;
  return 2 * phi * r;
}
console.log(`Luas Lingkaran: ${luasLingkaran(7)}`);
console.log(`Keliling Lingkaran: ${kelilingLingkaran(7)}`);

console.log("=".repeat(50));

// soal 2
console.log("Soal 2 ");
console.log("=".repeat(50)); 
let introduce = (nama, umur, jenisKelamin, pekerjaan) => {
    let Panggilan = jenisKelamin === "Laki-Laki" ? "Pak" : "Bu";
    return ` `+Panggilan +` ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun.`;
}
const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru")
console.log(perkenalanJohn);
console.log(perkenalanSarah);

console.log("=".repeat(50));

// soal 3   object literal ubah ke ES6
console.log("Soal 3 ");
console.log("=".repeat(50)); 
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(`${firstName} ${lastName}`);
        }
    };
}
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

console.log("=".repeat(50));

// soal 4 destructuring
console.log("Soal 4 ");
console.log("=".repeat(50));
let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}

let { name: phoneName, brand: phoneBrand, year, colors: [colorBronze, , colorBlack] } = phone;

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)
console.log("=".repeat(50));

// soal 5 spread operator  
console.log("Soal 5 ");
console.log("=".repeat(50));
let warna = ["biru", "merah", "kuning" , "hijau"]


let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}


let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
let gabung = {...buku, ...dataBukuTambahan, warnaSampul: [...buku.warnaSampul, ...warna]}
console.log(gabung)
console.log("=".repeat(50));

// Soal 6
console.log("Soal 6 ");
console.log("=".repeat(50));
let samsung ={
 name: "Samsung",
 products :[
  {name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"]},
  {name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"]},
  {name: "Samsung Galaxy Note 20s", colors: ["white", "black"]}
 ]
 }

let newProducts = [
 {name: "Samsung Galaxy A52", colors: ["white", "black"]},
 {name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"]}
]
samsung = addProducts(samsung, newProducts)


function addProducts(samsung, newProducts) {
  return {...samsung, products: [...samsung.products, ...newProducts]}
}
console.log(samsung)

// Soal 7 

console.log("=".repeat(50));
console.log("Soal 7");
let data = ["Bondra", "Medan", 25]
let [nama, domisili, umur] = data
let obj = {
  nama,
    domisili,
    umur
}
console.log(obj)

// Soal 8
console.log("=".repeat(50));
console.log("Soal 8");

//  function akan mengembalikan sebuah object yang berisi daftar nama siswa berdasarkan kelasnya 
let graduate = (students) => {
    return students.reduce((acc, student) => { 
        if (!acc[student.class]) {
            acc[student.class] = [];
        }
        acc[student.class].push(student.name);
        return acc;
    }, {});
}

const data1 = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
]

const data2 = [
  { name: "Yogi", class: "react"},
  { name: "Fikri", class: "agile"},
  { name: "Arief", class: "agile"}
]

 
console.log(graduate(data1))
console.log(graduate(data2))
console.log("=".repeat(50));