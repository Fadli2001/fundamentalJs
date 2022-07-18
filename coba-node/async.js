const getUserAsync = (id, callback) =>{
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const firstName = id === 1 ? 'Fadli' : 'Rahman';
        callback({id,firstName})
    }, time);
}

const userSatu = getUserAsync(1, (object)=>{
    console.log(object);
})

const userDua = getUserAsync(2, (object)=>{
    console.log(object);
})

const hello = 'Hello World';
console.log('Finish');