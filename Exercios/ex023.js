const fichaFuncionario = {
    Nome: "Guilherme Fortes Coelho",
    Idade: 21,
    Cargo: "ADM do zap"
}
if(Object.values(fichaFuncionario).length === 0) {
    console.log("Está vazio")
} else {
    console.log("Está preencida com :")
}
console.log(Object.entries(fichaFuncionario))
