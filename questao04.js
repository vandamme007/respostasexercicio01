/*
Contexto: Quando recebemos dados de usuários, é comum que a formatação
venha bagunçada (como letras maiúsculas no meio de palavras). Padronizar
esses dados é uma tarefa diária no desenvolvimento de software.
O Desafio: Crie uma função chamada formatarNome(nomeBaguncado) que
receba uma string com o nome de uma pessoa escrito de forma irregular.
1. A função deve transformar a primeira letra em maiúscula utilizando
.toUpperCase().
2. O restante do nome deve ser transformado em letras minúsculas utilizando
.toLowerCase().
3. Concatene as duas partes e retorne o nome corrigido.
Exemplo de entrada: "mArIA" Saída esperada: "Maria
*/

//Padronizador de nomes
function formatarNome(nomeBaguncado) {
    // 1. Pega a primeira letra e transforma em maiúscula
    let primeiraLetra = nomeBaguncado.charAt(0).toUpperCase();
    
    // 2. Extrai da segunda letra em diante e converte tudo para minúscula
    let restanteNome = nomeBaguncado.slice(1).toLowerCase();
    
    // 3. Concatena os pedaços
    return primeiraLetra + restanteNome;
}

const entradaNome = "mArIA";
console.log("Entrada:", entradaNome);
console.log("Nome Formatado:", formatarNome(entradaNome));
