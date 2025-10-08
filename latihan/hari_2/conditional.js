console.log("Latihan Pengkondisian\n");
console.log("===Pengkondisian IF===\n");

if (true) {
    console.log("Running true");
}

if (false) {
    console.log("Running false");
}

var mood = 'happy';
if (mood === 'happy') {
    console.log("Happy banget eyy");
} 

console.log("\n===Pengkondisian IF-ELSE===\n");


if (mood === 'happy') {
    console.log("Happy banget eyy");
} else {
    console.log("Sedih banget eyy");
}

console.log("\n===Pengkondisian ELSE IF===\n");

if (mood === 'happy') {
    console.log("Happy banget eyy");
} else if (mood === 'sad') {
    console.log("Sedih banget eyy");
} else {
    console.log("Saya baik-baik saja");
}

console.log("\n===Pengkondisian Nested IF ===\n");
var minimarketStatus = 'open';
var telur = 'sold out  ';
var buah = 'sold out';

if (minimarketStatus == 'open') {
    console.log("Saya masuk minimarket");
    if (telur == 'sold out' && buah == 'sold out') {
        console.log(" kedua item habis");
    } if (telur == 'sold out' && buah == 'available') {
        console.log("Habis telur, buah Tersedia");
    }else if (buah == 'sold out' && telur == 'available') {
        console.log("Habis buah, telur Tersedia");
    }
}else {
        console.log("minmarket tutup mending balik");
    }

console.log("\n===Pengkondisian Switch Case===\n");
var buttonPushed = '2';
switch (buttonPushed) {
    case '1':
        console.log("Matikan TV");
        break;
    case '2':
        console.log("Turunkan Volume TV");
        break;
    case '3':
        console.log("Tingkatkan Volume TV");
        break;
    case '4':
        console.log("Matikan TV");
        break;
    
    default:
        console.log("tidak terjadi apa-apa");
}

console.log("\n===Pengkondisian Ternary Operator===\n");
var nama = "Ahmad Sahroni ";
var umur = 17;
var statusKTP = (umur >= 17) ? "Boleh urus KTP" : "Belum boleh urus KTP";
console.log(nama + statusKTP);