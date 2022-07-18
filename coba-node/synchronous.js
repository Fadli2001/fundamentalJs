let getUserSync = (id) =>{
    const firstnName = id === 1 ? 'Fadli' : 'Rahman';
    return {id, firstnName};
}

setTimeout(() => {
    let userSatu = getUserSync(1);
    console.log(userSatu);
}, 2000);

let userDua = getUserSync(2);
console.log(userDua);

console.log("Hello User");


