function Fibonacci(n) {
    let a = 0, b = 1
    let resultado = [a + b]
    let i = 0
    while (i < n) {
        let next = a + b;
        resultado.push(next);
        a = b;
        b = next;
        i++;
    }

    return resultado;

}
let n = 10;
console.log(Fibonacci(n));
