let num = [5, 9, 15, 27]

function soma(num) {
    let soma = 0;
    for(let numero of num){
       soma = numero + soma
    }
    return soma
}

console.log(soma(num))