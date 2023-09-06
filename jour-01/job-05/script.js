// la function myPrimeList doit retourner l'ensemble des nombres premiers jusqu'à un nombre donné en paramètre
function myPrimeList(limit) {
    let result = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i%j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result = [...result, i];
        }
    }
    return result;
}

// console.log(myPrimeList(18));   // [2, 3, 5, 7, 11, 13, 17]
