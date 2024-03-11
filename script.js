'use strict';
//manupulating text content
//console.log(document.querySelector('.message').textContent);

//Manupulating input value
//console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 0;
let highScore = 0;
//Event Listners
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number😒';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct number✌️';
    score++;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    setTimeout(() => {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = 'Guess again😉';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('.number').textContent = '?';
    }, 2000);

    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess != secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high🤨' : 'Too low🤨';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game🤦‍♂️';
    }
  }
  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '0';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });
});
