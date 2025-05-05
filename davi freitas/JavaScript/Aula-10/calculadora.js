function sub(a, b) {
    alert(b - a)
}
function soma(a, b) {
    alert(a + b)
}
function divi(a, b) {
    alert(a / b)
}
function mult(a, b) {
    alert(a * b)
}

let tipo = prompt("Digite qual o tipo de operação você deseja executar nessa calculadora Ex; '*' = Multiplicação, ' + ' = Adição, ' - ' = Subtração, ' / ' = Divisão")
let num1 = (parseFloat(prompt("Digite o numero que você deseja, somar, dividir, multplicar ou subtrair")))
let num2 = (parseFloat(prompt("Digite o segundo numero que você deseja, somar, dividir, multplicar ou subtrair")))
switch (tipo) {
    case "*":
        mult(num1, num2)
        break;
    case "+":
        soma(num1, num2)
        break;
    case "-":
        sub(num1, num2)
        break;
    case "/":
        divi(num1, num2)
        break;
    default:
        alert("indisponivel")
        break;
}