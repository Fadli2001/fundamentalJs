let days = ['Senin','Selasa','Rabu','Kamis','jum\'at','Sabtu','Minggu'];

let months = ['Januari','Febuari','Maret','April','Mei'];

let even = [2,4,5,6];

//panjang array
console.log(days.length);

// menambah element array
even.push(8);
console.log('Array even di tambah 8',even);

// menghapus element terakhir
even.pop();

// menghapus element pertama
even.shift();

// merubah element
even[0] = 10

// menghapus data array dan berubah menjadi undefined 

delete days[0];
console.log(days[0]);


// menambahkan array dari posisi awal

let food = ['Nasi Goreng','Ayam Goreng','Rendang','Telor dadar'];

food.unshift('Bebek Goreng','Karedok Sayur');

console.log(food);