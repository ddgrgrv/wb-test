class MathX {
    static isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    static generateFibonacciSequence(n) {
        let fibonacci = [0, 1];
        for (let i = 2; i <= n; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        return fibonacci;
    }

    static generatePrimes(n) {
        let primes = [];
        for (let i = 2; i <= n; i++) {
            if (MathX.isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    }

    static fibonacci(n) {
        let sequence = MathX.generateFibonacciSequence(n);
        return sequence[n];
    }

    static fibonacciSequence(n) {
        return MathX.generateFibonacciSequence(n);
    }

    static nthPrime(n) {
        let primes = MathX.generatePrimes(n * 20);
        return primes[n - 1];
    }

    static primes(n) {
        return MathX.generatePrimes(n);
    }
}

// Пример использования библиотеки MathX
console.log(MathX.fibonacci(10)); // Выводит 55 (10-е число Фибоначчи)
console.log(MathX.fibonacciSequence(10)); // Выводит [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] (последовательность Фибоначчи до 10)
console.log(MathX.nthPrime(5)); // Выводит 11 (5-е простое число)
console.log(MathX.primes(10)); // Выводит [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] (простые числа до 10)
