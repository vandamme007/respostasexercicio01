/*
Contexto: Variáveis simples são ótimas para dados isolados, mas na vida real
os dados andam agrupados. Um produto de e-commerce, por exemplo, possui
nome, preço e quantidade em estoque. Objetos literais nos permitem modelar
essas entidades do mundo real encapsulando suas propriedades em uma única
estrutura estruturada por chaves ({}).
O Desafio: Crie um objeto literal chamado produto que represente um item
de tecnologia.
1. O objeto deve conter as propriedades: nome (string), preco (number) e
emEstoque (boolean).
2. Adicione uma propriedade que seja uma função interna (um método)
chamada calcularTotalEstoque(quantidadeDesejada). Esse método
deve multiplicar o preço do produto pela quantidade enviada por parâmetro
e retornar o valor monetário.
3. Imprima no terminal uma frase utilizando Template Strings que acione o
método criado.
Exemplo de Objeto Interno: nome: "Teclado Mecânico", preco: 250
Saída esperada no console: "O valor para 3 unidades de Teclado
Mecânico é R$ 750"

*/


//O Inventário de Produtos (Objetos Literais Básicos)
const produto = {
    nome: "Teclado Mecânico",
    preco: 250, 
    emEstoque: true,
    calcularTotalEstoque: function(quantidadeDesejada) {
        return this.preco * quantidadeDesejada;     
    }
};

//testando o método calcularTotalEstoque
const quantidade = 3;
const total = produto.calcularTotalEstoque(quantidade);
console.log(`O valor para ${quantidade} unidades de ${produto.nome} é R$ ${total}`);   
