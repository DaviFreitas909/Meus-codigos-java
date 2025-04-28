let notas = [10, 7, 8, 10, 10, ]
const soma = notas.reduce((acc, num) => acc + num,0) / notas.length
console.log('sua media esta em', soma)

if (soma >= 7.0) {
    console.log('Parabens, voce passou de ano');
}
else {
    console.log('voce esta reprovado(a), estude mais na proxima');
}