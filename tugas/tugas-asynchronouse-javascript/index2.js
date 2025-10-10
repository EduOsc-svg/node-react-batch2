// di index.js
var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var waktu = 10000
function baca(waktu, books) {
    if(books.length === 0) {
        console.log("Buku habis")
        return
    }
    readBooksPromise(waktu, books[0]).then(function(sisaWaktu){
        baca(sisaWaktu, books.slice(1))
    }).catch(function(sisaWaktu){
        console.log("Buku habis")
    })
    
}
console.log("Mulai membaca")
baca(waktu, books)