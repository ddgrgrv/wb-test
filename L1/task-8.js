function executeFunctions(functionsArray) {
    return function() {
      const results = [];
      for (let i = 0; i < functionsArray.length; i++) {
        results.push(functionsArray[i]());
      }
      return results;
    };
  }
  
  // Пример использования
  const functionsArray = [
    function() {
      return 1;
    },
    function() {
      return 2;
    },
    function() {
      return 3;
    }
  ];
  
  const executeAllFunctions = executeFunctions(functionsArray);
  const resultsArray = executeAllFunctions();
  console.log(resultsArray); 
  