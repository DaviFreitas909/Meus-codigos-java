// 1. sistema de verificação de idade com if-else 
// // este sistema verifica se a pesoa tem a idade suficiente para acessar um conteudo restrito, com um site ou serviço, se a idade for maior ou igual a 18 

let idade
let nome = 'Ana'
idade = 16

if (idade <= 17) {
    console.log('olá', nome, 'sua idade não corresponde com a idade minima do site, por favor esse conteudo não é para a sua idade . ❌');
}
else if (idade => 18) {
    console.log('olá', nome ,'sua idade corresonde com a idade minina do site.👍');
}
