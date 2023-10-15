class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function jsonToLinkedList(jsonData) {
    if (!jsonData || jsonData.length === 0) {
        return null;
    }

    const nodes = jsonData.map(data => new Node(data));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    return nodes[0];
}

// Пример использования функции
const jsonData = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 }
];

const linkedList = jsonToLinkedList(jsonData);

// Вывод связанного списка
let currentNode = linkedList;
while (currentNode !== null) {
    console.log(currentNode.data); // Выводит каждый объект из JSON
    currentNode = currentNode.next;
}
