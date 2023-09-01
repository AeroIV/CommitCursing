let numbers = [5, 55, 73, 9, 8, 12, 79, 31, 72, 3, 89, 1, 85, 39, 18, 92, 6, 519, 67, 418, 7, 41, 84, 26, 98, 16, 4.56, 4, 785, 21, 321, 65, 68];
let numbers_par = [];
let numbers_impar = [];

for (let or of numbers) {
  if (or % 2 == 0) {
    numbers_impar.push(or);
  } else {
    numbers_par.push(or);
  }
}

console.log(`Números Pares: ${numbers_par}`);
console.log(`Números Impares: ${numbers_impar}`);
