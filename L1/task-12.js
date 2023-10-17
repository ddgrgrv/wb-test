// Объект представляющий книгу
const book = {
    title: "Пример Книги",
    author: "Имя Автора",
    year: 2023,
  
    // Метод для получения названия книги
    getTitle: function() {
      return this.title;
    },
  
    // Метод для изменения названия книги
    setTitle: function(newTitle) {
      this.title = newTitle;
    },
  
    // Метод для получения автора книги
    getAuthor: function() {
      return this.author;
    },
  
    // Метод для изменения автора книги
    setAuthor: function(newAuthor) {
      this.author = newAuthor;
    },
  
    // Метод для получения года издания книги
    getYear: function() {
      return this.year;
    },
  
    // Метод для изменения года издания книги
    setYear: function(newYear) {
      this.year = newYear;
    }
  };
  
  // Пример использования методов объекта книги
  console.log("Название книги: " + book.getTitle()); // Выведет: Название книги: Пример Книги
  console.log("Автор книги: " + book.getAuthor()); // Выведет: Автор книги: Имя Автора
  console.log("Год издания: " + book.getYear()); // Выведет: Год издания: 2023
  
  book.setTitle("Новое Название Книги");
  book.setAuthor("Новый Автор");
  book.setYear(2024);
  
  console.log("Новое название книги: " + book.getTitle()); // Выведет: Новое название книги: Новое Название Книги
  console.log("Новый автор книги: " + book.getAuthor()); // Выведет: Новый автор книги: Новый Автор
  console.log("Новый год издания: " + book.getYear()); // Выведет: Новый год издания: 2024
  