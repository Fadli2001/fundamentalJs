let name;

console.log(name);

// contoh lain misal

let days = ['Senin','Selasa','Rabu'];

console.log(days[5]); // memanggil nilai index yang tidak ada


const person = {
    name : 'Fadli',
    age : 20 
}

console.log(person.isMarried); // memanggil porperties object yang tidak ada


//  DON'T DO THIS

//  logs "foo string"
(
    function() {
    const undefined = 'foo';
    console.log(undefined, typeof undefined);
  }
  )();
  
  //  logs "foo string"
  (function(undefined) {
    console.log(undefined, typeof undefined);
  })
  ('foo');


  

  let showSum = (function sum(a,b){
    return a + b;
  })(1,2)

  console.log(showSum);

  function sum(a , b){
    return a + b;
  }
  console.log(sum(1,2));


  let isUndefined = undefined;
  let isNull = null;
  let car = {
    name : 'Avanza',
    color : 'Blue'
  }

  console.log(typeof itsMe);
  console.log(typeof isNull);
  console.log(typeof car);


