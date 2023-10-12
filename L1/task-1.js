function isPalindrom(str){

    // Убираем пробелы и приводим строку к нижнему регистру
    const str1 = str.replace(/\s/g, '').toLowerCase();
    
    // Сравниваем строку с перевернутой
    if (str1 === str1.split('').reverse().join('')) {
        console.log(`${str} - это палиндром`);
    } else {
        console.log(`${str} - это не палиндром`);
    }   
}

isPalindrom('аргентина манит негра вв');