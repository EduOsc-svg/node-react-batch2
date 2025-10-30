// CRUD REST API dengan Raw MySQL, untuk POST nilai mahasiswa yang diperbolehkan di input dalam body json hanya nama, mata_kuliah dan nilai 
const { connectionPool } = require('../config/db')

exports.nilaiIndex = (nilai) => {
    if(nilai >= 80) return 'A'
    if(nilai >= 70 && nilai < 80) return 'B'
    if(nilai >= 60 && nilai < 70) return 'C'
    if(nilai >= 50 && nilai < 60) return 'D'
    return 'E'
}
// CREATE
exports.createMahasiswa = (req, res) => {
    let { nama, mata_kuliah, nilai } = req.body
    let queryText = `INSERT INTO nilai_mahasiswa (nama, mata_kuliah, nilai, indeks_nilai, created_at, updated_at) VALUES("${nama}", "${mata_kuliah}", ${nilai}, "${exports.nilaiIndex(nilai)}", now(), now())`
    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        res.json({'message': 'Mahasiswa Berhasil Ditambahkan', 'status': 'success'})
    })
}

exports.readMahasiswa = (req, res) => {
    let { nama, mata_kuliah, nilai } = req.body
    let queryText = "SELECT * FROM nilai_mahasiswa"
    // range nilai 0-100
    if(nilai){
        if(nilai >= 0 && nilai <= 100){
            queryText += ` WHERE nilai = ${nilai}`
        } else {
            return res.status(400).json({'message': 'Data tidak valid', 'status': 'error'})
        }
    }
    connectionPool.query(queryText, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json(data);
    });
}

exports.updateMahasiswa = (req, res) => {
    let { id } = req.params
    let { nama, mata_kuliah, nilai } = req.body // nilai 0-100
    let queryText = `UPDATE nilai_mahasiswa SET nama = "${nama}", mata_kuliah = "${mata_kuliah}", nilai = ${nilai}, indeks_nilai = "${exports.nilaiIndex(nilai)}", updated_at = now() WHERE id = ${id}`
    connectionPool.query(queryText,
        (err, data) => {
            if (err) {
                console.error(err);
                return;
            }  
            res.json({'message': 'Data Mahasiswa Berhasil Diupdate', 'status': 'success'})
        }
    )
}

exports.deleteMahasiswa = (req, res) => {
    let { id } = req.params
    let queryText = `DELETE FROM nilai_mahasiswa WHERE id = ${id}`
    connectionPool.query(queryText, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json({'message': 'Data Mahasiswa Berhasil Dihapus', 'status': 'success'})
    })
}
