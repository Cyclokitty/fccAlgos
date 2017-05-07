function sumPrimes(value) {
    var primes = [];
    var sumUp = [];
    for(let i = 2; i <= value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(let i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(let j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }

    for(let i = 2; i <= value; i++) {
        if(primes[i] === true) {
            sumUp.push(i);
        }
    }

    const total = sumUp.reduce((accum, item) => {
      return accum + item;
    }, 0);
    return total;
}

sumPrimes(977);
