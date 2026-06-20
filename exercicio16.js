/*
Contexto: Objetos e classes não servem apenas para armazenar dados estáticos;
eles gerenciam estados que mudam ao longo do tempo através de interações
seguras. Em sistemas bancários ou de jogos, chamamos métodos específicos para
alterar valores internos, simulando as regras de negócio reais da aplicação.
O Desafio: Crie uma classe chamada ContaBancaria para gerenciar transações
financeiras básicas.
1. Oconstructor deve receber o nome do titular e iniciar uma propriedade
interna chamada saldo sempre com o valor padrão de 0.
2. Crie um método chamado depositar(valor). Esse método deve somar o
valor recebido por parâmetro diretamente ao saldo da conta.
8
3. Crie um método chamado sacar(valor). Esse método deve verificar se o
saldo atual é suficiente para realizar a operação. Se for, subtraia o valor do
saldo; caso contrário, exiba no console a mensagem "Saldo insuficiente
para o saque de R$ [valor]".
Exemplo de teste de execução:

const minhaConta = new ContaBancaria("Prof. Wellington");
minhaConta.depositar(100);
minhaConta.sacar(150); // Deve exibir aviso de saldo insuficiente

*/


//O Simulador de Conta Bancária
class ContaBancaria {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log(`Saldo insuficiente para o saque de R$ ${valor}`);
        }
    }
}
// Testando a classe ContaBancaria
const minhaConta = new ContaBancaria("Brigida Sarmento");
minhaConta.depositar(100);
minhaConta.sacar(150); // Deve exibir aviso de saldo insuficiente para o saque de R$ 150    
