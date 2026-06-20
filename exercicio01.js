function contarDivisoresV1(n) {
    let contDivisores = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            contDivisores++;
        }      
    }
    return contDivisores;
}   

function contarDivisoresV2(n) {
    let contDivisores = 0;
    const raiz = Math.sqrt(n);

    for (let i = 1; i <= raiz; i++) {
        if (n % i === 0) {
            const j = n / i;

            if (i === j) {
                contDivisores += 1;
            } else {
                contDivisores += 2;
            }
        }
    }

    return contDivisores;
}

//teste
console.log("=== TESTANDO CONTAGEM DE DIVISORES ===\n");
const numero = 36;
console.time("Versão 1");   
console.log("Número de divisores (V1): " + contarDivisoresV1(numero));
console.timeEnd("Versão 1");

console.time("Versão 2");
console.log("Número de divisores (V2): " + contarDivisoresV2(numero));
console.timeEnd("Versão 2");
