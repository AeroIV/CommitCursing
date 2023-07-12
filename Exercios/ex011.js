let ano_de_nascimeno = 1852;
let date = new Date();
let ano_atual = date.getFullYear();
let idade = ano_atual-ano_de_nascimeno;

if(idade>=16) {
    console.log(`Você pode votar, pois possui ${idade} anos.`);
} else {
    console.log(`Você não pode votar, pois possui ${idade}`);
}