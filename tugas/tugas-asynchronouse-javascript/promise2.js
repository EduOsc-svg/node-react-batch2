// filterBooksPromise: kembalikan promise yang mem-filter daftar buku
function filterBooksPromise(colorful, amountOfPage) {
  return new Promise(function (resolve, reject) {
    var books = [
      { name: 'shinchan', totalPage: 50, isColorful: true },
      { name: 'Kalkulus', totalPage: 250, isColorful: false },
      { name: 'doraemon', totalPage: 50, isColorful: true },
      { name: 'algoritma', totalPage: 250, isColorful: false }
    ];

    // jika jumlah halaman kurang dari 40, tolak promise dengan pesan error
    if (amountOfPage < 40) {
      return reject(new Error('Maaf buku di bawah 40 halaman tidak tersedia'));
    }

    // filter sesuai kriteria yang diberikan
    var result = books.filter(function (x) {
      return x.totalPage === amountOfPage && x.isColorful === colorful;
    });

    // kembalikan hasil (bisa berupa array kosong jika tidak ada match)
    resolve(result);
  });
}

module.exports = filterBooksPromise;
