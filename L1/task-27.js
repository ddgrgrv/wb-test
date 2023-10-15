function addAnimationToElement(elementId, animationClass) {
    var element = document.getElementById(elementId);
    
    if (element) {
        // Добавляем класс с анимацией к элементу
        element.classList.add(animationClass);
        
        // Ожидаем завершения анимации и затем удаляем класс
        element.addEventListener('animationend', function() {
            element.classList.remove(animationClass);
        });
    } else {
        console.error('Элемент с указанным ID не найден');
    }
}

// Пример использования
// Пусть у вас есть элемент с ID 'myElement'
// CSS-класс 'slide-in' определяет анимацию
addAnimationToElement('myElement', 'slide-in');
