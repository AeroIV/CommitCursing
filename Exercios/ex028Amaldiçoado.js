let palavras = ["barco", "elo", "Par", "jicuraru", "jiboia", "januario", "avon", "SonimBlaybe", "SinimCleyNhim", "SonimVeltom"];

let escolhidos = palavras.map(palavra => {
  if (palavra.length > 5) {
    return palavra;
  }
});

escolhidos = escolhidos.filter(palavra => palavra !== undefined);
console.log(escolhidos)

// let palavras = ["barco","elo" ,"Par" ,"jicuraru", "jiboia", "januario", "avon", "SonimBlaybe", "SinimCleyNhim", "SonimVeltom"];
// const contagem = palavras.map(function filtro(palavras){
//     for(let p1 in palavras){
//         if(p1.length > 5){
//             return escolhidos.push(p1)
//         } 
//     }
    
// })

// let escolhidos = [];

// console.log()
// console.log(escolhidos);
// console.log(contagem);