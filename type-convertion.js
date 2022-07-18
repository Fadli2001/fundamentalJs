
// implicit convertion 

// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result,' ', typeof result) // "32"

result = '3' + true; 
console.log(result, typeof result); // "3true"

result = '3' + undefined; 
console.log(result, typeof result); // "3undefined"

result = '3' + null; 
console.log(result, typeof result); // "3null"



// non-numeric string used with - , / , * results to NaN

let resultNan;

resultNan = 'hello' - 'world';
console.log(resultNan); // NaN

resultNan = '4' - 'hello';
console.log(resultNan); // NaN


let count = undefined;

console.log(  isNaN(count));