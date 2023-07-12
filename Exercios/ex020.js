let PessoasDaChamadaPresentes = [7, 9, 12, 24, 36];

let maiorNúmeroDaChamada;

for(let numeroAtual of PessoasDaChamadaPresentes){
    if(maiorNúmeroDaChamada === undefined){
    maiorNúmeroDaChamada = numeroAtual
    } else if(numeroAtual > maiorNúmeroDaChamada){
        maiorNúmeroDaChamada = numeroAtual
    }

}

console.log(maiorNúmeroDaChamada);