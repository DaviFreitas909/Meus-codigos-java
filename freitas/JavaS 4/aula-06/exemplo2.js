let diaDaSemana = ['1 domingo', '2 segunda', '3 terça', '4 quarta', '5 quinta', '6 sexta', '7 sábado'];

let diaNumero = 4; 

switch (diaNumero) {
    case 0:
        console.log('Hoje é', diaDaSemana[0], '😒');
        break;
    case 1:
        console.log('Hoje é', diaDaSemana[1], '😪');
        break;
    case 2:
        console.log('Hoje é', diaDaSemana[2], '😑');
        break;
    case 3:
        console.log('Hoje é', diaDaSemana[3], '🙂');
        break;
    case 4:
        console.log('Hoje é', diaDaSemana[4], '☺');
        break;
    case 5:
        console.log('Hoje é', diaDaSemana[5], '😊');
        break;
    case 6:
        console.log('Hoje é', diaDaSemana[6], '🤗');
        break;
    default:
        console.log('Dia da semana inválido');
}
