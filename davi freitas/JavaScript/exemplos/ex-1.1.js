function pedirLanche(tamanho) {
    if (tamanho == 'pequeno') {
    console.log("Opa chefia seu lanche no tamanho pequeno saira daqui a 5 minutos"); 
    }
    else if (tamanho == 'medio') {
        console.log("Opa chefia seu lanche no tamanho medio saira daqui a 10 minutos"); 
    }
    else if (tamanho == 'grande') {
        console.log("Opa chefia seu lanche no tamanho grande saira daqui a 15 minutos"); 
    }
    else {
        console.log("nao temos esse tamanho no cardapio");
    }
}
console.log(pedirLanche('pequeno'));