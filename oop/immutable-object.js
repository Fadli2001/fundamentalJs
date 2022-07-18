
/**
 * pada kasus ini kita akan mempelajari bagaimana cara 
 * untuk mengcopy value object kedalam variable lain \
 * 
 * object pada dasarnya bersifat pass by reference 
 */

// object assign

const laptop = {
    name : 'asus'
}

const copyLaptop = Object.assign({},laptop);

copyLaptop.name = 'Mac';

// console.log(laptop);
// console.log(copyLaptop);

//spread operator 

const animal = {
    name : 'kucing',
    address : {
        color : 'blue'
    }
}

const animalCopy = {...animal, address :{...animal.address}};
animalCopy.name = 'Kelinci';
animalCopy.address.color = 'green';

// console.log(animal);
// console.log(animalCopy);

// object destructuring 

const furniture ={
    nameFurniture : 'kursi',
    price : 4000000,
    weight : 50,
    size : {
        length : 10,
        width : 5
    }
}

// const {nameFurniture,price,size:{length,width}}=furniture;

const {nameFurniture,price, ...etc}=furniture;

// console.log(nameFurniture);
// console.log(length);

