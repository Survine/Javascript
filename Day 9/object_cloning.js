let user = {
    name: "John",
    age: 30
}

let clone = {};

for (let key in user) {
    clone[key]=5;
}



console.log(clone)
console.log(user)