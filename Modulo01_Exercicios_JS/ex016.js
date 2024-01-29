let nota = [10 ,8 ,9];
let média =  (nota[0]+nota[1]+nota[2])/3;

if(média >= 7 && média < 10) {
    console.log("Aprovado");
} else if(média <= 7) {
    console.log("Reprovado");
} else {
    console.log("Aprovado com dinstinção");
}

console.log(média.toFixed(1).replace(".", ","))