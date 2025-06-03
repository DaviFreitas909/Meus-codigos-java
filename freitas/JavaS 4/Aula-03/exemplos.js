let peso = 100
let altura = 1.85
let imc = peso / (altura**2)
let imcpeso = imc.toFixed(2)
if (imc => 18.0) {
    console.log(`Bem vindo!, Nós somos da Saúde IMC, este e seu IMC', ${imcpeso}, 'meus parabens você esta saldável`);
} 
else if (imc => 20.0 && imc >= 30.0) {
    console.log(`Bem vindo!, Nós somos da Saúde IMC, este e seu IMC, ${imcpeso}, cuidado você está com sobrePeso`);
} 
else if (imc => 31.0 && imc <= 40.0) {
    console.log(`Bem vindo!, Nós somos da Saúde IMC, este e seu IMC, ${imcpeso}, grave você está obeso`);
} 
