let number = [7 , 9, 8, 3, 7, 18, 27, 38, 17, 23, 1, 47, 97, 42, 49, 87, 65, 19, 82, 99, 84, 21];
let pares = [];
let impares = [];

for(let actualnumber of number){
    if(actualnumber % 2 === 0){
        pares.push(actualnumber)
    } else if(actualnumber % 2 !== 0) {
        impares.push(actualnumber)
    }
}

console.log("São pares: ", pares)
console.log("São impares: ", impares)