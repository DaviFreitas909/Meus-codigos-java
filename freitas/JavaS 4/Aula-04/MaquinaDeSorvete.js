let sorvete = ['morango', 'baunilha', 'chocolate']
let saborEscolhido = sorvete[0]
switch (saborEscolhido) {

    case sorvete[0]:
        console.log(`Aqui esta seu sorvete de ${saborEscolhido}`);
        console.log(`Obrigado! esse sorve de ${saborEscolhido} esta uma delicia`);
        break;

    case sorvete[1]:
        console.log(`Aqui esta seu sorvete de ${saborEscolhido}`);
        console.log(`Obrigado! esse sorve de ${saborEscolhido} esta uma delicia`);
        break;

    case sorvete[2]:
        console.log(`Aqui esta seu sorvete de ${saborEscolhido}`);
        console.log(`Obrigado! esse sorve de ${saborEscolhido} esta uma delicia`);
        break;

    default:
        console.log('Desculpe! Nao teremos o sabor que voce');
        console.log('Ah muito obrigado entao, tenha um otimo dia.');
        break;
}