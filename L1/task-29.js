// Получаем форму по ее ID
const form = document.getElementById('myForm');

// Добавляем обработчик события submit для формы
form.addEventListener('submit', function(event) {
    // Отменяем стандартное поведение формы (перезагрузка страницы)
    event.preventDefault();

    // Получаем значения полей формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Выполняем определенные действия с данными (например, выводим их в консоль)
    console.log('Имя:', name);
    console.log('Email:', email);
});
