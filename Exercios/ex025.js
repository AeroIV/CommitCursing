const imdbNotas = {
    nota1: 5,
    nota2: 4,
    nota3: 0
}
let notaZero;

for(let nota in Object.values(imdbNotas)) {
    if(Object.values(imdbNotas)[nota] === 0)
        notaZero = Object.entries(imdbNotas)[nota]    
}
console.log(notaZero)
