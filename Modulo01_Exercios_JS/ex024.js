const listaDeCompras = {
    Produtos: {
        bota: 300,
        relicário: 300,
        potionHealth: 95,
        potionMana: 75,
    } 
}
let valoratual = 0
for(let valor in Object.values(listaDeCompras.Produtos)){
    valoratual = valoratual + Object.values(listaDeCompras.Produtos)[valor]
}
console.log(valoratual)
