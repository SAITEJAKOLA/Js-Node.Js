'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 correct guess!!'

console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = 30;
document.querySelector('.number').textContent = 13

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.ceil(Math.random() * 20)
let score = 20
let highscore = 0;

//set a newMessage
const updateMessage = (newMessage) => {
    document.querySelector('.message').textContent = newMessage
}

const updateScore = (newScore) => {
    score = newScore;
    document.querySelector('.score').textContent = score;
}
const resetGame = () => {
    updateScore(20);
    updateMessage('Start guessing...');
    secretNumber = Math.ceil(Math.random() * 20);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
}

const handleWin = () => {
    updateMessage('🎉 Corrrect guess !!')
    if (score > highscore) {
        highscore = score
        document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'
}

const handleIncorrectGuess = (guessMessage) => {
    if (score > 0) {
        updateMessage(guessMessage);
        updateScore(score - 1);
    } else {
        updateMessage('😢 Sorry you lost the game!!')
        updateScore(0);
    }
}
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        updateMessage('✋ Please enter a number to guess 🛑');
    } else if (guess === secretNumber) {
        handleWin();
    } else {
        handleIncorrectGuess(guess > secretNumber ? '🙂‍↔️ Guess is too high !!' : '🥲 Guess is too low !!')
    }
})

document.querySelector('.again').addEventListener('click', resetGame)

