let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Uma das solucoes mais atuais para o exercicio proposto no curso.
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);