function outerFunction(outer) {
    // Внутренняя функция, которая имеет доступ к outer
    function innerFunction(inner) {
      // innerVariable - это параметр внутренней функции
      console.log("Outer variable: " + outer);
      console.log("Inner variable: " + inner);
    }
  
    // Возвращаем внутреннюю функцию из внешней функции
    return innerFunction;
  }
  
  // Создаем новую функцию с доступом к outerVariable
  const closure = outerFunction("Hello, world!");
  
  // Вызываем внутреннюю функцию и передаем innerVariable
  closure("Inner variable value!"); 
  