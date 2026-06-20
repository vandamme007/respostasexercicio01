/*Contexto: Enquanto o laço for tradicional exige um controle manual de índices,
o método .forEach() nos permite executar uma função diretamente para cada
item de um array, deixando a leitura do código mais natural (declarativa).
O Desafio: Você tem um array de produtos: let carrinho = ["Maçã",
"Pão", "Leite", "Café"].
1. Utilize o método .forEach() para percorrer o array.
2. Para cada elemento, exiba no console uma mensagem formatada contendo
a posição do item e o nome dele.
3. O índice deve começar em 1, não em 0 (apenas visualmente).
Saída esperada no console:
Produto 1: Maçã
Produto 2: Pão
Produto 3: Leite
Produto 4: Café
*/

//lista de compras
let carrinho = ["Maçã", "Pão", "Leite", "Café"];

//usando o forEach para exibir os produtos com a posição
carrinho.forEach((produto, index) => {
    console.log(`Produto ${index + 1}: ${produto}`);
});
