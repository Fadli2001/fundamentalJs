function productPrototype(idParam,nameParam){
    let product = Object.create(productPrototype.prototype);
    product.id = idParam;
    product.firstName = nameParam;
    return product;
}


productPrototype.prototype.info = function (){
    return `this is a info = id : ${this.id}, Name : ${this.firstName}`;
}

let product1 = productPrototype(1,'fadli');

console.log(product1);


function createUser(idParam,usernameParam){
    return {
        id : idParam,
        username : usernameParam
    }
}

createUser['info'] = function (){
    return `this is info user = id : ${this.id}, username : ${this.username} `;
}

let user1 = createUser(1,'Udin');

console.log(user1);