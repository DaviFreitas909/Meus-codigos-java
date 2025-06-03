for (let primos = 2; primos <= 20; primos++) {
    let isPrime = true;

    for (let i = 2; i < primos; i++) {
        if (primos % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(primos);
    }
}
