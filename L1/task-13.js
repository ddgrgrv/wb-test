// Базовый класс Shape
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Нельзя создать экземпляр абстрактного класса Shape.");
        }
    }

    // Методы для расчета площади и периметра
    calculateArea() {
        throw new Error("Метод calculateArea должен быть реализован в подклассе.");
    }

    calculatePerimeter() {
        throw new Error("Метод calculatePerimeter должен быть реализован в подклассе.");
    }
}

// Подкласс для прямоугольника
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    // Реализация методов расчета площади и периметра для прямоугольника
    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Подкласс для круга
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Реализация методов расчета площади и периметра для круга
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Подкласс для треугольника
class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // Реализация методов расчета площади и периметра для треугольника
    calculateArea() {
        // Используем формулу Герона для вычисления площади треугольника
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    calculatePerimeter() {
        return this.a + this.b + this.c;
    }
}

// Пример использования классов и наследования
const rectangle = new Rectangle(4, 5);
console.log("Площадь прямоугольника:", rectangle.calculateArea());
console.log("Периметр прямоугольника:", rectangle.calculatePerimeter());

const circle = new Circle(3);
console.log("Площадь круга:", circle.calculateArea());
console.log("Длина окружности круга:", circle.calculatePerimeter());

const triangle = new Triangle(3, 4, 5);
console.log("Площадь треугольника:", triangle.calculateArea());
console.log("Периметр треугольника:", triangle.calculatePerimeter());
