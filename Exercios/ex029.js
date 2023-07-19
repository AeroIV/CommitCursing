
function soma_mult(n1, n2, n3, n4, cb){
    let result = n1+n2
    let result1 = n3*n4
    cb(result, result1)
}

// function mult(n3, n4, cb){
//     let result = n3*n4
//     cb(result)
// }

function result(resultado, resultado2){
    console.log(`O resultado é: ${resultado}, ${resultado2}`)
}

soma_mult(6, 5, 7, 5, result)