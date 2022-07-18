function greet(){
    age = 15;
   console.log(age);
}
// greet();

// console.log(age);

/**
* coba perhatikan code di line 7, mencoba mengakses variable age yang ada pada function greet, disana terlihat tidak ada deklarasi
* yang dilakukan, namun code line 7 tidak mengakibatkan error apapun, hal ini berbeda jika kalian coba 
* hilangkan pemanggilan function greet(), maka akan menampilkan error variable age is not defined
* mengapa demikian?, karena dalam function greet variable age tidak kita deklarasikan makanya
* ketika memaanggil function greet(),akan dibuat sebuah variable global diluar function contoh ; var age ; 
* dengan melakukan itu akan mengotori global scope nya, sehingga sekarang lingkup globalnya punya variable age ;
* padahal tujuan kita age hanya bisa diakes dalamfunction greet() saja, 
* Maka sebaiknya dalam function greet() kita tambahkan keyword var sebelum variable age,
* ATAU ADA CARA LAIN yaitu menggunakan 'use strict'; (contoh ada pada file : use-strict.js)
* se strict adalah sebuah ekspresi yang digunakan untuk memberitahu interpreter JavaScript (seperti dibrowser)
* untuk mengeksekusi kode dalam mode strict. Didalam mode strict, contohnya, tidak memperbolehkan anda menggunakan
* variabel yang belum dideklarasikan sebelumnya. Ini biasanya diabaikan oleh interpreter JavaScript yang sudah jadul
* atau jika kode diekseksui tanpa menggunakan strict mode.Guna dari use strict ini hanya untuk membantu anda menulis
* kode lebih baik dengan memberikan error ketika mencoba melakukan sesuatu yang dapat biasanya gampang menyebabkan bug.
* 
*/



// end 