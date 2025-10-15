const express = require('express')
const { createMahasiswa, readMahasiswa, updateMahasiswa, deleteMahasiswa} = require('../Controllers/mahasiswaController')
const router = express.Router()

router.post('/mahasiswa', createMahasiswa)
router.get('/mahasiswa', readMahasiswa)
router.put('/mahasiswa/:id', updateMahasiswa)
router.delete('/mahasiswa/:id', deleteMahasiswa)
module.exports = router