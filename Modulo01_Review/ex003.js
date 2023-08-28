let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplicador = 5;
let result;

console.log(`Tabuada do ${multiplicador}`)

for(n of numeros){
    result = n*multiplicador;
    console.log(`${n} x ${multiplicador} = ${result}`);
}