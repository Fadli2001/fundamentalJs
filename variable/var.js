
// // Cara membuat variable dalam javascript 
// var firstName = 'Muhammad';
// let middleName = 'Fadli Rahman';
// const lastName = 'Fauzan';


// // Contoh Redeclared
// var a = 10;
// var a = 20;

// // Contoh Reassign
// a = 30;

// // Contoh Hoisting
// b = 10  
// var b;

// // console.log('hosting',b); // Output : 10

// ///////////////////////////////////////////////////////////
// // Contoh Scope
// var d = 10;
// if (true) {
//     var d = 20;
// }
// console.log('global variable d',d);
// console.log("Block Scope variable d", d); // Output : 20
// // Terjadi redeclared pada variable d

// var e = 10;

// function example() {
//     var e = 20;
//     console.log("Variable e di dalam function", e);
// }

// console.log("Global variable e", e);
// example();


// var mySchool = 'SMKN 1 Cipanas';

// function myOldSchool(){
//     var mySchool = 'MTS Assa\'idiyyah'; // tidak melakukan deklarasi ulang pada global variable
//     console.log(mySchool,'adalah sekolah lamaku');
// }

// console.log(mySchool);
// myOldSchool();
// var myAge = 10;
// function presentAge(){
//     var myAge = 11;
//     console.log("variable dalam function",myAge);
// }

// console.log('variable luar function',myAge);
// presentAge()


// function myCity(){
//     let city = 'jakarta';
//     console.log(city);
// }

var myAge = 25;

if(myAge >= 23){
    var isYoung = true;
}

console.log(isYoung);


a = 00111100
b = 00001101

console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a);
