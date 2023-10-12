function isStrangeNumber(num) {
    // Функция для вычисления суммы всех делителей числа num
    function sumOfDivisors(number) {
        let sum = 0;

        for (let i = 1; i < number - 1; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }
        return sum;
    }

    // Вычисляем сумму делителей числа num
    const divisorSum = sumOfDivisors(num);

    // Проверяем, является ли число странным
    if (num === divisorSum) {
        console.log(num + " - это странное число.");
    } else {
        console.log(num + " - это не странное число.");
    }
}

isStrangeNumber(28);
