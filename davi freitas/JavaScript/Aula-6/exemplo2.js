let semana = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado", "domingo"]
let diaSemana = semana[0]
switch (diaSemana) {
    case semana[0]:
        console.log(`ola boa tarde hoje e o começo de uma nova semana ${diaSemana}`);
        break;
   
        case semana[1]:
            console.log(`Estamos percorrendo mais um dia nessa semana, hoje é ${diaSemana}`);
        break;

        case semana[2]:
            console.log(`Um bom meio de semana para todos, hoje é ${diaSemana}`);
        break;

        case semana[3]:
            console.log(`Estamos chegando longe, hoje é ${diaSemana}`);
        break;

        case semana[4]:
            console.log(`Um bom final de semana para todos, hoje é ${diaSemana}`);
        break;

        case semana[5]:
            console.log(`Finalmente hoje é ${diaSemana}`);
        break;

        case semana[6]:
            console.log(`Felizmente e infelizmente hoje e ${diaSemana}`);
        break;

    default:
        console.log("Esse dia nao existe em nossa semana");
        break;
}