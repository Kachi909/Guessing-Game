let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

document.getElementById('Chances').textContent = attempts;

function checkGuess() {
    let userGuess = document.getElementById('UserGuess').value;
    let result = document.getElementById('result');

    // Validate user input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100 || !Number.isInteger(Number(userGuess))) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
        result.style.color = 'red';
        return;
    }

    userGuess = Number(userGuess);
    attempts--;

    if (userGuess === randomNumber) {
        result.textContent = `Congratulations! You guessed the right number: ${randomNumber}`;
        result.style.color = 'green';
        endGame();
    } else if (attempts === 0) {
        result.textContent = `Sorry, you've used all your attempts. The number was ${randomNumber}.`;
        result.style.color = 'red';
        endGame();
    } else {
        if (userGuess < randomNumber) {
            result.textContent = 'Too low! Try again.';
        } else {
            result.textContent = 'Too high! Try again.';
        }
        result.style.color = 'orange';
        document.getElementById('Chances').textContent = attempts;
    }
}

function endGame() {
    document.getElementById('UserGuess').disabled = true;
    document.querySelector('button[onclick="checkGuess()"]').disabled = true;
}

function replay() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 3;
    document.getElementById('Chances').textContent = attempts;
    document.getElementById('UserGuess').value = '';
    document.getElementById('UserGuess').disabled = false;
    document.querySelector('button[onclick="checkGuess()"]').disabled = false;
    document.getElementById('result').textContent = '';
}
