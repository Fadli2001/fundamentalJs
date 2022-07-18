// hoisting

/**
 * ### Contoh menggunakan var 
 */

 // ======== Hoising

console.log(a);
var a = 10;

/* 
jika dijalankan kode diatas akan menghasilkan output undefined, sudah jelas jika javascript membaca
kode perbaris , maka harusnya error, berusaha mencoba menampilkan nilai a, padahal a belum di deklarasikan 
sebelumnya
*/

// ========= scope function

// for (var i = 0; i < 10; i++) {
//     // console.log(`perulangan ke ${i}`);
    
// }
// console.log(i); 

/**
 * mencoba mengakses variable i yang dideklarasikan dalam looping, dan itu berkerja tanpa ada error apapun, variable i yang di
 * console diluar looping memiliki nilai 10 , karena i tersebut telah di increment oleh looping sebanyak 9 kali,
 * mungkin kalau di bahasa pemrograman lain hal tersebut akan menyebabkan error, karena di js menganut
 * Function Scope ,di bahasa pemrograman lain disebut Block Scope sedangkan Js Menganus Function Scope 
 * apa itu Function scope dan block scope?, akan ada materi tersendiri 
 * 
 * Solusinya agar variable i tidak bisa diakses diluar, kita mesti memasukannya kedapam function
 */

function cetakAngka(){
    for (let i = 0; i < i; i++) {        
            console.log(i);
    }
}

// console.log(i);

/**
 * dengan cara begitu maka akan menghasilkan error i is not defined,
 * ini yang disebut function scope
 * 
 */



(function(){
for (let i = 0; i < 10; i++) {
    console.log(i);
    } 
}());

/*
 * kemudian kalian juga bisa menggunakan function IIFE (Immediately Invoke Function Expression)
 * / SIEF (Self Invoking Anonymous FUnction) merupakan sebuah function 
 * expression yang dipanggil ketika langsung dibuat  
 * bayangkan jika project kalian sudah besar programbesar apalagi sudah berkerja berkolaborasi
 * dapat berpotenasi duplicate function atau kalian dengan teman kalian bisa saja membuat
 * nama variable yang sama, mungkin akan lebih sulit jika harus membuat program dengan banyak 
 * function seperti yang diatas
 * 
 * karena js merilis es6 kalian tidka perlu lagi melakukan hal tsersebut , cukup ganti variable 
 * keyword var dengan let keyword , maka semua prilaku yang sebelumnya tidak berlalku 
 * variable let ini menganut block scope bukan function scope  
 */

for (let i = 0; i < 10; i++) {
    console.log(i);    
}

// console.log(i);

/**
 * kode pada line 76 terjadi errror , karena variable i sudah menggunakan let variable 
 * 
 * mungkin kalian akan bertanya kenapa si js menganut function scope?, kenapa ga block sope aja 
 * waktu pertama kali dibuatnnya seperti halnya pemrograman lain  
 */




