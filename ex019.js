let PessoasDaChamadaPresentes = [3, 5, 19, 21, 27];

let menorNúmeroDaChamada;

for(let numeroAtual of PessoasDaChamadaPresentes){
    if(menorNúmeroDaChamada === undefined){
    menorNúmeroDaChamada = numeroAtual
    } else if(numeroAtual < menorNúmeroDaChamada){
        menorNúmeroDaChamada = numeroAtual
    }

}

console.log(menorNúmeroDaChamada);