function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Exemplo de uso
let numero = 10;
console.log(`O fatorial de ${numero} é:`, fatorial(numero));