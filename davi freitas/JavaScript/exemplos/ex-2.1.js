let saborDePizza = ['calabresa', 'mussarela', "frango catupiri"]
saborEscolhido = saborDePizza[1]
switch (saborEscolhido) {

    case saborDePizza[0]:
        console.log(`sua pizza de ${saborEscolhido} esta por 30R$`);
        break;

        case saborDePizza[1]:
        console.log(`sua pizza de ${saborEscolhido} esta por 28R$`);
        break;

        case saborDePizza[2]:
        console.log(`sua pizza de ${saborEscolhido} esta por 35R$`);
        break;

    default:
        break;
}