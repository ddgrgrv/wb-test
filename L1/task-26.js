function traverseDOM(node, callback) {
    // Вызываем колбэк для текущего узла
    callback(node);
    
    // Рекурсивно вызываем функцию для всех дочерних узлов
    node = node.firstChild;
    while (node) {
        traverseDOM(node, callback);
        node = node.nextSibling;
    }
}

// Пример использования
var startingElement = document.body; // Начнем обход с body

function logNodeInfo(node) {
    if (node.nodeType === 1) {
        // Если узел - элемент (nodeType 1), выводим информацию о теге в консоль
        console.log('Тег элемента:', node.tagName);
    }
}

traverseDOM(startingElement, logNodeInfo);
