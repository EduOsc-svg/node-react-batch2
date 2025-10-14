// route GET dengan path "/lingkaran-tabung"
const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Tugas Pengenalan Express Soal 1");
});

app.get("/lingkaran-tabung/:r/:t", (req, res) => {
    const r = parseFloat(req.params.r);
    const t = parseFloat(req.params.t);
    const phi = 22/7;
    function luasLingkaran(r) {
        return phi * r * r;
    }
    function volumeTabung(r, t) {
        return luasLingkaran(r) * t;
    }

    function kelilingLingkaran(r) {
        return 2 * phi * r;
    }

    let output = `jariJari : ${r}, tinggi: ${t}, volume tabung : ${volumeTabung(r, t)}, luas alas tabung : ${luasLingkaran(r)}, keliling alas tabung : ${kelilingLingkaran(r)}`;
    res.send(output);
});

let dataOrang =[
{id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
{id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
{id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
{id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
{id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
]


app.get("/data-orang/", (req, res) => {
    //respon berupa html table
    let table = "<h1>Data Orang</h1><table border='1'><tr><th>ID</th><th>Name</th><th>Umur</th><th>Pekerjaan</th><th>Jenis Kelamin</th></tr>";
    let id = req.query.id;
    let name = req.query.name;
    if (name === undefined) name = "";
    if (id) {
        const orang = dataOrang.find(o => o.id === parseInt(id));
        if (orang) {
            table += `<tr><td>${orang.id}</td><td>${orang.name}</td><td>${orang.umur}</td><td>${orang.pekerjaan}</td><td>${orang.jenisKelamin}</td></tr>`;
        } else {
            table += `<tr><td colspan="5">Data not found</td></tr>`;
        }  
    } else {
        dataOrang.forEach(orang => {
            if (orang.name.toLowerCase().includes(name.toLowerCase())) {
                table += `<tr><td>${orang.id}</td><td>${orang.name}</td><td>${orang.umur}</td><td>${orang.pekerjaan}</td><td>${orang.jenisKelamin}</td></tr>`;
            }
        }); 
    }
    
    table += "</table>";
    res.send( {table} );

   
});

app.get("/data-orang/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const orang = dataOrang.find(o => o.id === id);
    if (orang) {
        res.send(orang);
    } else {
        res.send({message: "Maaf data tidak ditemukan"});
    }
});

//contoh: http://localhost:3000/data-orang/1