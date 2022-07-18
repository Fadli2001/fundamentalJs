let person = {
    firstnName : 'Dedi',
    age : 20,
    greet : function (surname){        
        let nameResult = surname == undefined ? 'Default Name' : surname;
        return `Hi ${nameResult} my name is ${this.firstnName}`; 
    }
}

console.log(person.greet('Fadli'));