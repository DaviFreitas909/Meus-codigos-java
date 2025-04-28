let idade;

do {
    idade = parseInt(prompt("Digite sua idade:"), 10);

    if (isNaN(idade) || idade <= 0) {
        alert("Idade inválida! Por favor, insira uma idade maior que 0.");
    }

} while (isNaN(idade) || idade <= 0);

alert("Idade válida inserida: " + idade);