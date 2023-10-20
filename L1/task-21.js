function measureCallStackSize() {
    try {
        // Эта функция вызывает саму себя рекурсивно до тех пор, пока не произойдет переполнение стека
        measureCallStackSize();
    } catch (error) {
        // Как только стек переполнен, мы можем определить глубину вызова функций
        console.log('Глубина вызова функций: ' + error.stack.split('\n').length);
    }
}

measureCallStackSize();
