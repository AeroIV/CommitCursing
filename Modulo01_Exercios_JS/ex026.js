function imparOuPar(num) {
    if(num % 2 === 0){
        return "Par";
    } else {
        return "Ímpar";
    }
}
let val = imparOuPar(10)

console.log(val)

console.log(imparOuPar(5))