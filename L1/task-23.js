function assessPasswordStrength(password) {
    // Проверяем длину пароля
    if (password.length < 8) {
        return "Пароль слишком короткий. Используйте не менее 8 символов.";
    }
    
    // Проверяем наличие цифр, букв в верхнем и нижнем регистре, а также спецсимволов
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    // Оцениваем сложность пароля
    let strength = 0;
    if (hasNumber) strength++;
    if (hasUpperCase) strength++;
    if (hasLowerCase) strength++;
    if (hasSpecialChars) strength++;
    
    // Предоставляем рекомендации
    if (strength < 3) {
        return "Пароль слабый. Рекомендуется использовать комбинацию букв в верхнем и нижнем регистре, цифр и спецсимволов.";
    } else {
        return "Пароль сильный!";
    }
}

// Пример 
let userPassword = prompt("Введите пароль:");
let result = assessPasswordStrength(userPassword);
console.log(result);
