// Latihan OOP (Object-Oriented Programming) — contoh-contoh lengkap
// File ini berisi beberapa topik OOP di JavaScript dengan contoh yang bisa dijalankan.
// Di setiap baris berikut saya tambahkan komentar penjelasan untuk membantu pemahaman.

// -----------------------------
// 1) Class dasar dan constructor
// -----------------------------
// Deklarasi class 'Person'
class Person {
	// Konstruktor dipanggil saat membuat instance baru
	constructor(name, age) {
		// simpan nama ke properti instance
		this.name = name; // nama adalah string, contohnya 'Alya'
		// simpan umur ke properti instance
		this.age = age; // umur adalah number, contohnya 25
	}

	// method greet mengembalikan string sapaan
	greet() {
		// menggunakan template string untuk menyisipkan properti
		return `Halo, saya ${this.name}, umur ${this.age}`; // contoh: 'Halo, saya Alya, umur 25'
	}
}
    
// -----------------------------
// 2) Encapsulation: private field + getter/setter
// -----------------------------
class BankAccount {
	// #balance adalah field privat; tidak bisa diakses langsung dari luar
	#balance = 0; // inisialisasi default saldo

	// konstruktor menerima owner (pemilik) dan saldo awal (default 0)
	constructor(owner, initial = 0) {
		this.owner = owner; // simpan nama pemilik
		this.#balance = initial; // set saldo awal ke field privat
	}

	// deposit menambah saldo jika jumlah valid
	deposit(amount) {
		if (amount <= 0) throw new Error('Jumlah deposit harus > 0'); // validasi
		this.#balance += amount; // tambahkan ke saldo privat
		return this.#balance; // kembalikan saldo terbaru
	}

	// withdraw mengurangi saldo jika cukup
	withdraw(amount) {
		if (amount <= 0) throw new Error('Jumlah withdraw harus > 0'); // validasi
		if (amount > this.#balance) throw new Error('Saldo tidak cukup'); // cek saldo
		this.#balance -= amount; // potong saldo
		return this.#balance; // kembalikan saldo sisa
	}

	// getBalance menyediakan akses baca terhadap saldo privat
	getBalance() {
		return this.#balance; // kembalikan nilai privat
	}

	// contoh getter property bernama 'balance' (read-only)
	get balance() {
		return this.#balance; // mengizinkan acc.balance untuk membaca saldo
	}

	// setter balance sengaja menolak perubahan langsung
	set balance(_) {
		throw new Error('Tidak boleh set langsung balance'); // mencegah set manual
	}
}

// -----------------------------
// 3) Static members
// -----------------------------
class Utils {
	// method static bisa dipanggil tanpa membuat instance: Utils.uuid()
	static uuid() {
		// buat id acak sederhana dari angka random base36
		return Math.random().toString(36).slice(2, 10);
	}
}

// -----------------------------
// 4) Inheritance & Polymorphism
// -----------------------------
// Employee mewarisi (extends) class Person
class Employee extends Person {
	// konstruktor Employee menerima tambahan role dan salary
	constructor(name, age, role, salary = 0) {
		super(name, age); // panggil konstruktor parent (Person)
		this.role = role; // simpan peran/posisi kerja
		this.salary = salary; // simpan gaji awal
	}

	// override method greet untuk menambahkan informasi role
	greet() {
		// gunakan super.greet() untuk memanggil implementasi parent
		return `${super.greet()} - saya bekerja sebagai ${this.role}`; // contoh tambahan
	}

	// giveRaise menaikkan gaji berdasarkan persentase
	giveRaise(percent) {
		this.salary = this.salary * (1 + percent / 100); // hitung gaji baru
		return this.salary; // kembalikan nilai gaji setelah kenaikan
	}
}

// -----------------------------
// 5) Abstract class pattern (base class that expects override)
// -----------------------------
// Shape berperilaku seperti kelas abstrak: method area() harus dioverride
class Shape {
	constructor(name = 'shape') {
		this.name = name; // nama shape untuk debugging
	}

	// default area melempar error jika tidak dioverride
	area() {
		throw new Error('Method area() harus dioverride di subclass');
	}
}

// Circle mengimplementasikan area untuk lingkaran
class Circle extends Shape {
	constructor(radius) {
		super('circle'); // panggil parent untuk set nama
		this.radius = radius; // simpan radius
	}

	area() {
		return Math.PI * this.radius * this.radius; // rumus pi * r^2
	}
}

// Rectangle mengimplementasikan area untuk persegi panjang
class Rectangle extends Shape {
	constructor(width, height) {
		super('rectangle'); // set nama
		this.width = width; // simpan lebar
		this.height = height; // simpan tinggi
	}

	area() {
		return this.width * this.height; // rumus luas persegi panjang
	}
}

// -----------------------------
// 6) Composition (has-a relationship)
// -----------------------------
class Engine {
	constructor(power) {
		this.power = power; // power dalam hp (contoh: 150)
	}

	start() {
		return `Engine ${this.power}hp started`; // pesan saat engine dinyalakan
	}
}

class Car {
	constructor(make, model, engine) {
		this.make = make; // merek mobil
		this.model = model; // model mobil
		this.engine = engine; // engine adalah objek Engine (composition)
	}

	drive() {
		// delegasi ke engine.start() untuk memulai mesin saat drive
		return `${this.make} ${this.model}: ${this.engine.start()}`;
	}
}

// -----------------------------
// 7) Mixins (menambah kemampuan ke class tanpa inheritance)
// -----------------------------
// CanFly adalah fungsi yang menerima Base class lalu mengembalikan class baru
const CanFly = Base => class extends Base {
	fly() {
		// this.name jika tersedia, kalau tidak gunakan nama konstruktor
		return `${this.name || this.constructor.name} is flying`;
	}
};

class Bird {
	constructor(name) {
		this.name = name; // nama burung
	}
}

// SuperBird memiliki kemampuan terbang karena mixin CanFly
class SuperBird extends CanFly(Bird) {}

// -----------------------------
// 8) Prototype-based example (lama, sebelum class)
// -----------------------------
function OldSchoolPerson(name, age) {
	this.name = name; // set properti pada objek yang dibuat
	this.age = age; // set umur
}

// menambahkan method ke prototype agar semua instance mewarisi
OldSchoolPerson.prototype.greet = function() {
	return `Halo (prototype), saya ${this.name}`; // method berbasis prototype
};

// -----------------------------
// 9) Factory function
// -----------------------------
// Factory membuat dan mengembalikan objek baru tanpa menggunakan class
function createPoint(x, y) {
	return {
		x, // properti x
		y, // properti y
		move(dx, dy) { // method untuk memindahkan point
			this.x += dx; // ubah posisi x
			this.y += dy; // ubah posisi y
		}
	};
}

// -----------------------------
// Contoh penggunaan & tes singkat (menunjukkan alur pembuatan objek dan pemanggilan method)
// -----------------------------
console.log('\n--- 1) Class dasar ---'); // header bagian contoh
const p = new Person('Alya', 25); // buat instance Person
console.log(p.greet()); // panggil method greet lalu tampilkan

console.log('\n--- 2) Encapsulation (BankAccount) ---');
const acc = new BankAccount('Budi', 1000); // buat rekening dengan saldo 1000
console.log('Saldo awal:', acc.getBalance()); // baca saldo melalui method
acc.deposit(500); // tambah saldo 500
console.log('Setelah deposit 500:', acc.balance); // baca melalui getter property
try {
	acc.balance = 100000; // coba set langsung, akan dilempar error
} catch (e) {
	console.log('Setter error (expected):', e.message); // tangkap dan tampilkan error
}

console.log('\n--- 3) Static util ---');
console.log('Random id:', Utils.uuid()); // panggil static method tanpa membuat instance

console.log('\n--- 4) Inheritance & Polymorphism ---');
const emp = new Employee('Citra', 30, 'Frontend', 5000); // buat Employee, mewarisi Person
console.log(emp.greet()); // memanggil greet yang dioverride di Employee
console.log('Gaji setelah 10% raise:', emp.giveRaise(10)); // naikkan gaji 10%

console.log('\n--- 5) Abstract pattern (Shapes) ---');
const c = new Circle(3); // buat Circle radius 3
const r = new Rectangle(4, 5); // buat Rectangle 4x5
console.log('Luas lingkaran r=3:', c.area().toFixed(2)); // hitung luas lingkaran
console.log('Luas rectangle 4x5:', r.area()); // hitung luas rectangle

console.log('\n--- 6) Composition (Car & Engine) ---');
const e = new Engine(150); // buat engine 150hp
const car = new Car('Toyota', 'Supra', e); // buat Car yang memiliki Engine
console.log(car.drive()); // panggil drive yang memanggil engine.start()

console.log('\n--- 7) Mixins ---');
const sb = new SuperBird('Phoenix'); // buat SuperBird dengan mixin CanFly
console.log(sb.fly()); // panggil method fly yang ditambahkan mixin

console.log('\n--- 8) Prototype-based ---');
const op = new OldSchoolPerson('Doni', 40); // buat object menggunakan function constructor
console.log(op.greet()); // panggil method yang didefinisikan di prototype

console.log('\n--- 9) Factory function ---');
const pt = createPoint(2, 3); // buat point melalui factory
pt.move(1, -1); // pindahkan point
console.log('Point after move:', pt); // tampilkan objek point setelah dipindah

console.log('\nSemua contoh OOP selesai.'); // penanda akhir

// Ekspor (opsional) supaya file bisa dipakai sebagai modul oleh file lain
module.exports = {
	Person,
	BankAccount,
	Employee,
	Shape,
	Circle,
	Rectangle,
	Engine,
	Car,
	SuperBird,
	OldSchoolPerson,
	createPoint,
	Utils
};

	// -----------------------------
	// Tambahan: fungsi periksaDataPasien(patient)
	// -----------------------------
	// Fungsi ini melakukan validasi sederhana terhadap objek pasien.
	// Input: patient = { id, name, age, email, phone, bloodType }
	// Output: { valid: boolean, errors: string[] }
	function periksaDataPasien(patient = {}) {
		// kumpulkan error pada array
		const errors = [];

		// helper: cek field ada dan bukan string kosong
		const isNonEmptyString = v => typeof v === 'string' && v.trim().length > 0;

		// cek id (harus ada dan string)
		if (!isNonEmptyString(patient.id)) {
			errors.push('id pasien diperlukan (string)');
		}

		// cek nama
		if (!isNonEmptyString(patient.name)) {
			errors.push('nama pasien diperlukan');
		}

		// cek umur: harus number >= 0
		if (patient.age == null || typeof patient.age !== 'number' || Number.isNaN(patient.age)) {
			errors.push('umur harus berupa angka');
		} else if (patient.age < 0) {
			errors.push('umur tidak boleh negatif');
		}

		// cek email (jika diisi)
		if (isNonEmptyString(patient.email)) {
			// regex sederhana untuk format email
			const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
			if (!emailRe.test(patient.email)) errors.push('format email tidak valid');
		}

		// cek phone (opsional) - minimal angka 6 karakter
		if (isNonEmptyString(patient.phone)) {
			const digits = patient.phone.replace(/[^0-9]/g, '');
			if (digits.length < 6) errors.push('nomor telepon tampak tidak valid');
		}

		// cek golongan darah (opsional)
		if (isNonEmptyString(patient.bloodType)) {
			const allowed = ['A', 'B', 'AB', 'O', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
			if (!allowed.includes(patient.bloodType.toUpperCase())) errors.push('golongan darah tidak dikenal');
		}

		return { valid: errors.length === 0, errors };
	}

	// contoh penggunaan fungsi periksaDataPasien
	console.log('\n--- Contoh: periksaDataPasien ---');
	const contohPasien = { id: 'P-001', name: 'Santi', age: 29, email: 'santi@mail.com', phone: '+62812345678', bloodType: 'O' };
	console.log('Input pasien:', contohPasien);
	console.log('Hasil validasi:', periksaDataPasien(contohPasien));

	// tambahkan ke ekspor modul agar bisa digunakan dari file lain
	module.exports.periksaDataPasien = periksaDataPasien;
