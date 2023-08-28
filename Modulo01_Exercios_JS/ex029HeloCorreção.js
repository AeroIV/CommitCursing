printf = (argumento) => {
    console.log(`O resultado da operação é ${argumento}`);
}

soma = (a, b, cb) => {
    cb(a+b);
}

mult = (a, b, cb) => {
    cb(a*b);
}

soma(7, 8, printf)
mult(9, 5, printf)