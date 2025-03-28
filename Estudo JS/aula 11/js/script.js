let num1 = prompt('digite um numero:');
let num2 = prompt('digite outro numero:');


// Sempre precisa converter desta forma ou de alguma outra para conseguir somar os valores ao inves de concatenar.

num1 = Number(num1);
num2 = Number(num2);


console.log(num1 + num2);

// const resultado = num1 + num2;

// Utilizando crase sempre ficara mais visivelmente agradavel alem de deixar mais clean e objetivo, com a crase podemos passar uma expressao dentro da template string.

alert(`O resultado da sua conta foi: ${num1 + num2}`);