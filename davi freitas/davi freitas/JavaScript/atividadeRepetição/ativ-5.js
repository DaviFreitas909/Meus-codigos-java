for (d = 2; d <= 20; d++) {

    let Isprimo = true

    for (let i = 2; i < d; i++) {
        if (d % i == 0) {
            Isprimo = false
            break;
        }
    }
        if (Isprimo) {
            console.log(d);
        }
    
}