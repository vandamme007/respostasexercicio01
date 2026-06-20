/*
Contexto: Em sistemas maduros, muitas vezes o usuário não preenche todas
as opções disponíveis. Podemos usar “parâmetros padrão” (default parameters)
para assumir valores automáticos sem precisarmos escrever muitos blocos de
if/else.
O Desafio: Escreva uma função saudarUsuario(nome, idioma = "pt").
4
1. A função deve verificar o parâmetro idioma.
2. Se for "pt", retorne "Olá, [nome]!". Se for "en", retorne "Hello,
[nome]!". Se for "es", retorne "¡Hola, [nome]!".
3. Teste a função omitindo o segundo parâmetro para ver o valor padrão em
ação.
Exemplo de entrada: saudarUsuario("Ana") Saída esperada: "Olá,
Ana!
*/



// Mensageiro Poliglota (

function saudarUsuario(nome, idioma = "pt") {
    switch(idioma) {
        case "en":
            return `Hello, ${nome}!`;
        case "es":
            return `¡Hola, ${nome}!`;
        case "pt":
        default:
            return `Olá, ${nome}!`;
    }
}

//testando com diferentes idiomas
console.log(saudarUsuario("John", "en"));
console.log(saudarUsuario("Maria", "es"));
console.log(saudarUsuario("Ana", "pt"));

// Testando omitindo o parâmetro (ativando o Default fallback)
console.log(saudarUsuario("Ana"));
