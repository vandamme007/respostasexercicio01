/*
Contexto: A troca de valores (swap) usando uma variável temporária é uma
das manobras mais fundamentais na programação.
O Desafio: Crie uma função chamada inverterArray(lista) que inverta a
ordem dos elementos de um array **sem usar o método nativo .reverse()**.
1. Você deve percorrer apenas metade do array.
2. Em cada passo, troque o elemento da posição i pelo elemento da posição
correspondente no final do array.
3. Regra de Ouro: Declare a variável temp obrigatoriamente dentro do
bloco do laço for, utilizando let.
Exemplo de entrada: [10, 20, 30, 40] Saída esperada: [40, 30, 20,
10]
*/

//inversão de um array
function inverterArray(lista) {
    let n = lista.length;
    
    // O laço percorre apenas metade do array: Math.floor(n / 2)
    for (let i = 0; i < Math.floor(n / 2); i++) {
        // Regra de Ouro: variável let temp criada no bloco
        let temp = lista[i]; 
        
        // Posição oposta é (n - 1) menos o deslocamento i
        let indiceOposto = n - 1 - i; 
        
        lista[i] = lista[indiceOposto];
        lista[indiceOposto] = temp;
    }
    
    return lista;
}

const arrayOriginal = [10, 20, 30, 40, 50]; // Teste com número ímpar e par de elementos
console.log("Array original:", arrayOriginal);
console.log("Array invertido:", inverterArray(arrayOriginal));
