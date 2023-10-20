function calculateAvailableSpace() {
    try {
        if ('localStorage' in window && window['localStorage'] !== null) {
            var testData = '';
            // 1MB string
            for (var i = 0; i < 1024 * 1024; i++) {
                testData += 'a';
            }

            var totalData = '';
            while (true) {
                try {
                    localStorage.setItem('testData', testData);
                    totalData += testData;
                } catch (e) {
                    // localStorage is full, remove the test data
                    localStorage.removeItem('testData');
                    break;
                }
            }

            // Calculate and display the total size in megabytes
            var totalSizeMB = (totalData.length / (1024 * 1024)).toFixed(2);
            console.log('Максимальный объем данных в localStorage: ' + totalSizeMB + ' MB');
        } else {
            console.log('Ваш браузер не поддерживает localStorage.');
        }
    } catch (e) {
        console.log('Произошла ошибка: ' + e);
    }
}

calculateAvailableSpace();
