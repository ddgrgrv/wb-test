let minRange = 1;
let maxRange = 100;
let targetNumber;
let attempts = 0;

const minRangeElement = document.getElementById("minRange");
const maxRangeElement = document.getElementById("maxRange");
const userGuessInput = document.getElementById("userGuess");
const submitButton = document.getElementById("submitGuess");
const messageElement = document.getElementById("message");
const attemptCountElement = document.getElementById("attemptCount");
const newGameButton = document.getElementById("newGame");

function startNewGame() {
    targetNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    attempts = 0;
    attemptCountElement.textContent = attempts;
    messageElement.textContent = "";
}

startNewGame();

submitButton.addEventListener("click", function() {
    const userGuess = parseInt(userGuessInput.value);

    if (userGuess < minRange || userGuess > maxRange || isNaN(userGuess)) {
        messageElement.textContent = "Введите число в пределах диапазона!";
    } else {
        attempts++;
        attemptCountElement.textContent = attempts;

        if (userGuess === targetNumber) {
            messageElement.textContent = `Поздравляю, вы угадали число ${targetNumber} с ${attempts} попыток!`;
        } else {
            let hint = "";
            if (userGuess < targetNumber) {
                hint = "Загаданное число больше.";
            } else {
                hint = "Загаданное число меньше.";
            }

            if (attempts % 3 === 0) {
                hint += ` Подсказка: Число ${targetNumber} является ${targetNumber % 2 === 0 ? "четным" : "нечетным"}.`;
            }

            messageElement.textContent = hint;
        }
    }
});

newGameButton.addEventListener("click", startNewGame);