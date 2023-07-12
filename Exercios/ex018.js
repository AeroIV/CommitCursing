let comprasNaTabacariaDoSeuZé = ["roche", "carvão", "essencia de melancia"];
let item1; 
let item2; 
let item3;

for(let itens of comprasNaTabacariaDoSeuZé){
    if(item1 === undefined){
        item1 = itens
    } else if(item2 === undefined){
        item2 = itens
    } else if(item3 === undefined){
        item3 = itens
    }
}

console.log(item1.slice(0,1), item2.slice(0,1), item3.slice(0,1));
