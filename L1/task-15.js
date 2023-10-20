async function asyncFunction() {
    try {
        // Ожидание выполнения асинхронной операции с помощью await
        const result1 = await someAsyncOperation1();
        const result2 = await someAsyncOperation2();
        const result3 = await someAsyncOperation3();

        // Возврат результата выполнения
        return {
            result1,
            result2,
            result3
        };
    } catch (error) {
        // Обработка ошибок, если они возникают во время выполнения асинхронных операций
        throw new Error('Ошибка в асинхронной функции: ' + error.message);
    }
}

// Пример асинхронных операций, которые функция ожидает
function someAsyncOperation1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Результат операции 1');
        }, 1000);
    });
}

function someAsyncOperation2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Результат операции 2');
        }, 1500);
    });
}

function someAsyncOperation3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Результат операции 3');
        }, 2000);
    });
}

// Пример использования асинхронной функции
asyncFunction()
    .then(result => {
        console.log('Результат выполнения асинхронной функции:', result);
    })
    .catch(error => {
        console.error(error.message);
    });
