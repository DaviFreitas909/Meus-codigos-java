let peso = 70
let altura = 1.72
let imc = peso / (altura**2)
console.log(imc)

let peso1 = 18
let peso2 = 25
let peso3 = 30
let peso4 = 40

let pesoTotal = 30

if (pesoTotal == peso1) {
    console.log('Bem vindo!, Nós somos da Saúde IMC, este e seu IMC', peso1, 'meus parabens você esta saldável');
} 
else if (pesoTotal == peso2) {
    console.log('Bem vindo!, Nós somos da Saúde IMC, este e seu IMC', peso2, 'cuidado você está com sobrePeso');
} 
else if (pesoTotal == peso3) {
    console.log('Bem vindo!, Nós somos da Saúde IMC, este e seu IMC', peso3, 'grave você está obeso');
} 
else if (pesoTotal == peso4) {
    console.log('Bem vindo!, Nós somos da Saúde IMC, este e seu IMC', peso4, 'vá para o medico você está com obesidade grave ');
} 
else {
    console.log('Bem vindo!, Nós somos da Saúde IMC, seu IMC é inválido para o nosso contador')
}