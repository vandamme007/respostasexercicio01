/*
Contexto: O JavaScript é case-sensitive, o que significa que “Senha” e “senha”
são consideradas palavras diferentes. Além disso, espaços acidentais podem
causar falhas em sistemas de login.
O Desafio: Escreva uma função verificarAcesso(senhaDigitada,
senhaCadastrada) que compara duas strings.
1. A função deve remover quaisquer espaços em branco no início e no final de
ambas as strings usando .trim().
2. Emseguida, deve realizar uma comparação ignorando letras maiúsculas
e minúsculas (transforme ambas para o mesmo caso antes de comparar).
3
3. Retorne true se forem iguais e false caso contrário.
Exemplo de entrada: " Secreta123 ", "secreta123" Saída esperada:
true
*/

//A Porta de Segurança (Comparação de Strings)
function verificarAcesso(senhaDigitada, senhaCadastrada) {
    // .trim() remove os espaços invisíveis do começo e do fim
    // .toLowerCase() força tudo para um formato único (minúsculo)
    let formatadaDigitada = senhaDigitada.trim().toLowerCase();
    let formatadaCadastrada = senhaCadastrada.trim().toLowerCase();

    // Compara estritamente
    return formatadaDigitada === formatadaCadastrada;
}

const inputUser = " Secreta123 ";
const bancoDados = "secreta123";

console.log("Tentativa de Login válida?", verificarAcesso(inputUser, bancoDados));
