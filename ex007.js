let permiss = "gUiLhErMe";
    permiss = permiss.toLowerCase();
    
    
switch(permiss) {
    case "comum":
        console.log(`Você possui baixo nível de autorização, pois sua permissão é ${permiss}.`);
    break;
    case "gerente":
        console.log(`Você possui médio nível de autorização, pois sua permissão é ${permiss}`);
    break;
    case "diretor":
        console.log(`Você possui alto nível de autorização, pois sua permissão é ${permiss}`);
    break;
    default:
        console.log(`${permiss} não possui permissão`);
}