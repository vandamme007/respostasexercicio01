/*
Contexto: A funções podem receber valores, chamados parâmetros, armazená
los em variáveis e efetuar operações sobre estes valores, retornando o resultado
deste processamento. Desta forma, elas agem como pequenas “fábricas”, proces
sando entradas e gerando resultados, como saída.
O Desafio: Crie uma função calcularPrecoFinal(valorProduto,
porcentagemDesconto) que processe uma venda.
1. A função deve calcular quanto vale o desconto em dinheiro.
2. Subtraia esse desconto do valor original do produto.
3. Retorne o valor final a ser pago pelo cliente.
Dica: O cálculo do desconto é feito pela fórmula: Desconto = Valor × Porcentagem / 100
Exemplo de entrada: 150, 20 Saída esperada: 120
*/

//Calculadora de Descontos
function calcularPrecoFinal(valorProduto, porcentagemDesconto) {
    // Aplicação fiel da fórmula matemática
    let desconto = valorProduto * (porcentagemDesconto / 100);
    
    let valorFinal = valorProduto - desconto;
    
    return valorFinal;
}

console.log("Valor final a pagar: R$", calcularPrecoFinal(150, 20));
