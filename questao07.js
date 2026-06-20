/*
Contexto: Construir mensagens ou documentos dinâmicos juntando textos
fixos com variáveis é o que torna as páginas web interativas e personalizadas
para cada usuário.
O Desafio: Crie uma função gerarCracha(nome, departamento, id) que
una essas informações.
1. A função deve concatenar os parâmetros para formar o texto exato do
crachá.
2. Você pode utilizar o operador + ou as modernas Template Strings (crases
“e${}‘).
3. Oformato de retorno deve ser estritamente: [ID]- NOME: departamento.
Exemplo de entrada: "Carlos", "TI", 404 Saída esperada: "[404]
CARLOS: TI" (Observe que o nome deve ficar todo em maiúsculo na saída!)
*/


//O Gerador de Crachás
function gerarCracha(nome, departamento, id) {
    // Uso das Template Strings para interpolação avançada
    // Note a crase (`) isolando a expressão.
    return `[${id}] - ${nome.toUpperCase()}: ${departamento}`;
}

console.log(gerarCracha("Carlos", "TI", 404)); 
