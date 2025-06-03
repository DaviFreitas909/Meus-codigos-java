let num1 = 0, num2 = 1;
let contador = 0;

while (contador < 10) {
    console.log(num1);  
    let num = num1;
    num1= num2;
    num2 = num + num2;  
    contador++;  
}