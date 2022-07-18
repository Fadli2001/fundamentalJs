const user = {
    firstName: "fadli",
    age: 19,
    isActive: true,
    sayHello: function (name) {
        return `Hallo ${name} My name is ${this.firstName}`
    }
};

// let result = user.sayHello('Ujang');
// console.log(user);


function createUser(firstNameParam, ageParam, addressParam, isActiveParam) {
    let user = {
        firstName: firstNameParam,
        age: ageParam,
        address: addressParam,
        isActive: isActiveParam,
        showName: function () {
            return `Hello i\'m ${this.firstName}`;
        }
    }

    return user;
}


// let fadli = createUser('fadli', 12, 'Cianjur', true);
// console.log(fadli.showName());

const ProductMethod = {
    info: function () {
        return `productID : ${this.productID},productName : ${this.name}`
    }
}


//kita membuat product baru dari object yang lama 
function ProductObject(id, name) {
    //copy
    let product = Object.create(ProductMethod)
    // product.productID = id
    // product.name = name
    return product;
}
let product03 = ProductObject(236, 'jution')
console.log(product03);
console.log(ProductMethod);


let twoWheelers = {
    brand: 'Vario',
    startEngine : function (){
        return `Engine is start`;
    }
}


let copyTwoWheelers = Object.create(twoWheelers);

// console.log('ini object pertama',twoWheelers);
// console.log('copy object',copyTwoWheelers);