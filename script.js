const contentDiv = document.querySelector('.content');
const inputBox = document.getElementById('input');
const guessBtn = document.getElementById('guess-btn');
const guessDetail = document.querySelector('.guess-detail');
const guessedNum = document.getElementById('guessed-num');
const remainingGuess = document.getElementById('remaining-guess');
const highOrLow = document.getElementById('high-low');
const newBtn = document.getElementById('new-btn');

const guessedNumText = 'Guessed numbers are:';
const remainingGuessText = 'No. of guesses:';

let totalGuess = 5;
let play = true;
let randomNum;

const randomNumber = function () {
  return Math.trunc(Math.random() * 15) + 1;
};

const ShowHide = function (inputValue, res) {
  contentDiv.style.height = '460px';
  guessedNum.textContent = `${guessedNumText} ${inputValue}`;
  remainingGuess.textContent = `${remainingGuessText} ${totalGuess}`;
  highOrLow.textContent = res;
  guessDetail.classList.remove('hide');
  highOrLow.classList.remove('hide');
};

const gameEnd = function (inputValue, res) {
  contentDiv.style.height = '500px';
  guessedNum.textContent = `${guessedNumText} ${inputValue}`;
  remainingGuess.textContent = `${remainingGuessText} ${totalGuess}`;
  highOrLow.textContent = res;
  guessDetail.classList.remove('hide');
  highOrLow.classList.remove('hide');
  newBtn.classList.remove('hide');
};

randomNum = randomNumber();
console.log(randomNum);

guessBtn.addEventListener('click', function () {
  const inputValue = inputBox.value;
  if (play && !isNaN(inputValue) && totalGuess > 0) {
    if (inputValue == randomNum) {
      gameEnd(inputValue, 'You won the game.');
      play = false;
    } else if (inputValue < randomNum) {
      totalGuess--;
      if (totalGuess === 0) {
        gameEnd(inputValue, 'You lost the game.');
        play = false;
      } else ShowHide(inputValue, 'Your guess is too low.');
    } else {
      totalGuess--;
      if (totalGuess === 0) {
        gameEnd(inputValue, 'You lost the game.');
        play = false;
      } else ShowHide(inputValue, 'Your guess is too high.');
    }
  }
});

newBtn.addEventListener('click', function () {
  contentDiv.style.height = '300px';
  guessDetail.classList.add('hide');
  highOrLow.classList.add('hide');
  newBtn.classList.add('hide');
  randomNum = randomNumber();
  console.log(randomNum);
  inputBox.value = '';
  totalGuess = 5;
  play = true;
});
