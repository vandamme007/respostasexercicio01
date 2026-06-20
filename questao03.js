/*
Contexto: Arrays são a base para gerenciar coleções de dados. Antes de
utilizarmos métodos avançados, é essencial dominar a iteração manual, pois ela
nos dá controle total sobre o fluxo de execução.
O Desafio: Crie uma função chamada filtrarPares(numeros) que receba um
array de números inteiros.
1. Utilize um laço for clássico (com inicialização, condição e incremento)
para percorrer cada elemento do array.
2. Identifique os números pares e adicione-os a um novo array chamado pares.
3. Retorne o array pares ao final da execução.
Exemplo de entrada: [3, 8, 15, 22, 42, 7] Saída esperada: [8, 22,
42]
*/


//Filtro de Elementos 
function filtrarPares(numeros) {
    let pares = []; // Novo array para armazenar o resultado

    // Laço for clássico
    for (let i = 0; i < numeros.length; i++) {
        // O operador módulo (%) retorna o resto da divisão. Se for 0 por 2, é par.
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]); // Adiciona o número ao novo array
        }
    }

    return pares;
}

const entrada = [3, 8, 15, 22, 42, 7];
console.log("Entrada:", entrada);
console.log("Apenas Pares:", filtrarPares(entrada));
