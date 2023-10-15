function convertStringToJson(inputString) {
    try {
        // Пытаемся распарсить входную строку в формат JSON
        const jsonData = JSON.parse(inputString);
        
        // Проверяем, что результат - это объект или массив
        if (jsonData && (typeof jsonData === 'object' || Array.isArray(jsonData))) {
            return jsonData;
        } else {
            throw new Error("Входная строка не является валидным JSON");
        }
    } catch (error) {
        throw new Error("Невозможно распознать входную строку как JSON: " + error.message);
    }
}

// Пример использования
const inputString = '{"name": "John", "age": 30, "city": "New York"}';
try {
    const jsonData = convertStringToJson(inputString);
    console.log("Результат конвертации в JSON:", jsonData);
} catch (error) {
    console.error("Ошибка:", error.message);
}
