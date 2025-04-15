
function classificaçãoDeIdade(idade) {
    if (idade <= 12) {
        return "criança";
    } else if (idade <= 17) {
        return "adolecente";
    } else if (idade <= 64) {
        return "adulto";
    } else {
        return 'idoso';
    }
}
console.log(classificaçãoDeIdade(1))