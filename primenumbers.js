for (var num = 2; num <= 20; num++) {
    var isPrime = true;

    // Check divisors from 2 up to the square root of the number
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
