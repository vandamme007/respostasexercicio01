/*
Contexto: Além de apenas listar ou filtrar dados de coleções de objetos,
frequentemente precisamos processar valores numéricos contidos dentro deles,
como somar o faturamento de vendas ou calcular médias de notas de alunos em
um diário de classe.
ODesafio: Escreva uma função chamada calcularMediaTurma(listaAlunos)
que receba um array de objetos literais, onde cada objeto possui as propriedades
nome e nota.
1. Utilize um laço de repetição (for clássico ou .forEach()) para ler a nota
de cada objeto dentro do array.
2. Acumule os valores dessas notas em uma variável de soma e calcule a média
aritmética simples da turma.
3. Retorne o valor final da média arredondado para uma casa decimal usando
o método .toFixed(1).

Exemplo de entrada:

let alunos = [
{ nome: "Tiago", nota: 8.5 },
{ nome: "Beatriz", nota: 9.0 },
{ nome: "Lucas", nota: 6.5 }
];

Saída esperada: 8.
*/


//A Média da Turma (Acumulação em Vetores de Objetos)
function calcularMediaTurma(listaAlunos) {   
    let soma = 0;
    listaAlunos.forEach(aluno => {
        soma += aluno.nota;    
    }); 
    let media = soma / listaAlunos.length;
    return media.toFixed(1);    
}   

//testando a função com um array de alunos
let alunos = [
    { nome: "Felipe", nota: 10.0 },
    { nome: "Arthur", nota: 9.0 },
    { nome: "Brigida", nota: 8.5 }
];  

console.log(calcularMediaTurma(alunos)); // Saída esperada: 9.2
