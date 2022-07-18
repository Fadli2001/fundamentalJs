// Contoh Redeclared
const a = 10;
// const a = 20;

// Contoh Reassign
const b = 10;
b = 20;

// Contoh Hoisting
const c = 10;
// const c; // Erro : 'const' declarations must be initialized

console.log(a); // Error: Cannot redeclare block-scoped variable 'a'
console.log(b); // Output : 20
console.log(c); // Error : Cannot access 'c' before initialization