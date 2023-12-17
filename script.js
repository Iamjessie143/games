let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessHistory = [];

function checkGuess() {
    const userInput = document.getElementById('user-input').value;
    const resultElement = document.getElementById('result');
    const messageElement = document.getElementById('message');
    const attemptCountElement = document.getElementById('attempt-count');
    const guessHistoryElement = document.getElementById('guess-history');

    if (!isNaN(userInput) && userInput !== '') {
        const userGuess = parseInt(userInput, 10);
        attempts++;

        if (userGuess === targetNumber) {
            resultElement.textContent = 'Congratulations! You guessed the correct number!';
            resultElement.style.color = 'green';
            messageElement.style.display = 'none';
        } else {
            resultElement.textContent = `Incorrect. The correct number is ${targetNumber}. Try again!`;
            resultElement.style.color = 'red';
            messageElement.textContent = 'Try a different number.';
            messageElement.style.color = 'blue';
            messageElement.style.display = 'block';
        }

        attemptCountElement.textContent = attempts;

        guessHistory.push(userGuess);
        guessHistoryElement.textContent = guessHistory.join(', ');
    } else {
        resultElement.textContent = 'Please enter a valid number.';
        resultElement.style.color = 'red';
        messageElement.style.display = 'none';
    }
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessHistory = [];

    document.getElementById('result').textContent = '';
    document.getElementById('message').textContent = 'Guess a number between 1 and 100';
    document.getElementById('attempt-count').textContent = '0';
    document.getElementById('guess-history').textContent = '';
    document.getElementById('user-input').value = '';
}
