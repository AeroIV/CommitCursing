function media(array) {
    let soma = 0;
    let ressoma = 0;
    for (let numero of array) {
     if (soma === 0) {
        ressoma = soma + numero;
    }
    }
    return ressoma / array.length
}

module.exports = {media}