let val = 5055;
let desc = val*0.05;
let valComDesc = val-desc;

val = val.toFixed(2).replace(`.`, `,`);
desc = desc.toFixed(2).replace(`.`, `,`);
valComDesc = valComDesc.toFixed(2).replace(`.`, `,`);

console.log(`5% de desconto de R$${val} é R$${desc}, o valor com desconto será R$${valComDesc}`);