/*
Contexto: Frequentemente precisamos extrair apenas um “pedaço” de um texto
maior, como a sigla de um estado em um endereço completo ou o domínio de
um e-mail para descobrir a empresa do usuário.
O Desafio: Crie uma função chamada extrairDominio(email) que receba um
endereço de e-mail completo.
1. Utilize o método .indexOf() para encontrar a posição do caractere @.
2. Use o método .slice() ou .substring() para extrair apenas o domínio
(tudo o que vem logo após o @).
3. Retorne o domínio extraído.
Dica: O método .slice(inicio) extrai da posição inicio até o
final da string caso o segundo parâmetro seja omitido.
Exemplo de entrada: "aluno.estudioso@universidade.edu.br" Saída es
perada: "universidade.edu.br"
*/

//caçador de domínio
function extrairDominio(email) {
    // 1. Localiza a posição exata da arroba no texto
    let posicaoArroba = email.indexOf("@");
    
    // Verifica se a arroba existe para prevenir erros
    if (posicaoArroba === -1) return "E-mail inválido";

    // 2. Corta a string a partir de (posicaoArroba + 1) até o fim
    let dominio = email.slice(posicaoArroba + 1);
    
    return dominio;
}

const entradaEmail = "aluno.estudioso@universidade.edu.br";
console.log("E-mail:", entradaEmail);
console.log("Domínio extraído:", extrairDominio(entradaEmail));
