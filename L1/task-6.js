var people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
];

// Сортировка массива объектов по возрастанию возраста и по алфавиту по имени при равных возрастах
people.sort(function(a, b) {
    // Сначала сравниваем возраст
    if (a.age !== b.age) {
        return a.age - b.age;
    }
    // Если возрасты равны, сравниваем по по алфавиту
    return a.name.localeCompare(b.name);
});

// Выводим отсортированный массив
console.log(people);
