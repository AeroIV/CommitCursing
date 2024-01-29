let n1 = 5
let n2 = 7
let operação = "mUlTiPlIcAçÃo"
    operação = operação.toLowerCase();

switch(operação) {
    case "soma":
        let soma = (n1+n2);
        console.log(`Calculo: ${n1} + ${n2} = ${soma}`);
    break;
    case "subtração":
        let subtração = (n1-n2);
        console.log(`Calculo: ${n1} - ${n2} = ${subtração}`);
    break;
    case "multiplicação":
        let multiplicação = (n1*n2);
        console.log(`Calculo: ${n1} x ${n2} = ${multiplicação}`);
    break;
    case "divisão":
        let divisão = (n1/n2);
        console.log(`Calculo: ${n1} ÷ ${n2} = ${divisão}`);
    break;
    default:
       console.log("Error \n Falha no calculo. \n Verifique os dados inseridos e tente novamente.");
}