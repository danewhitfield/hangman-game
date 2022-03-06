let guess1 = document.querySelector(".guess1");
let guess2 = document.querySelector(".guess2");
let guess3 = document.querySelector(".guess3");
let guess4 = document.querySelector(".guess4");
let guess5 = document.querySelector(".guess5");

guess1.style.background = "red";

class Hangman {
  constructor(wordToGuess) {
    this.lives = 5;
    this.wordToGuess = wordToGuess;
    this.correctLetters = wordToGuess.split("").map(() => {
      return "";
    });
  }

  guessLetter(letter) {
    let isCorrect = false;
    for (let i = 0; i < this.correctLetters.length; i++) {
      if (letter === this.wordToGuess[i]) {
        let correct = (this.correctLetters[i] = letter);
        guess1.textContent = correct;
        guess1.style.background = "green";
        isCorrect = true;
      }
    }
    if (!isCorrect) {
      this.lives--;
    }

    if (this.lives <= 0) {
      this.lives = 0;
      console.log("GAME OVER!!!");
    }
  }
}

const game = new Hangman("daney");
game.guessLetter("a");

console.log(game);

module.exports = { Hangman, game };
