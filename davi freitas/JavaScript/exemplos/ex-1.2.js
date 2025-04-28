function ligação(urgencias) {
    if (urgencias == 'urgente') {
        console.log('Estamos te redirecionando para o atendimento imediato so um instante');
    }
    else if (urgencias == 'comum') {
        console.log('Aguarde na fila de espera ate o seu atendimento');
    }
    else if (urgencias == 'informações gerais') {
        console.log('So um instante estaremos te enviando o menu de informações de nossa empresa');
    }
    else {
        console.log('Essa opção de atendimento nao esta disponivel em nossos serviços');
    }
}
console.log(ligação('urgente'))