// Пример объекта, который нужно преобразовать в JSON-строку
const obj = {
    name: "John",
    age: 30,
    city: "New York"
};

// Преобразование объекта в JSON-строку
const jsonString = JSON.stringify(obj);

// Вывод JSON-строки
console.log(jsonString); // Выведет '{"name":"John","age":30,"city":"New York"}'
