/*
Rafael Bueno tem 26 anos, pesa 95 kg e tem 1.85 de altura e seu imc e de 25.92929383929
Rafael nasceu em 1997
*/

const nome = 'Rafael';
const sobrenome = 'Bueno';
const idade = 26;
const peso = 95; // peso em quilogramas
const altura = 1.85; // Altura em metros
let imc;
let anoNascimento;
let anoAtual = 2023;

/*
  IMC = peso / (altura * altura)
*/

imc = peso / (altura * altura);

// console.log(imc);

anoNascimento = anoAtual - idade;

// console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`e tem ${altura} de altura e seu imc e de ${imc}.`);
console.log(`Rafael nasceu em ${anoNascimento}.`);