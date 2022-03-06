const inquirer = require("inquirer");
const { Hangman, game } = require("./index");

const firstQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    default: "Player1",
  },
];

const secondQuestions = [
  {
    type: "input",
    name: "firstGuess",
    message: "Guess your first letter",
  },
];

const thirdQuestions = [
  {
    type: "input",
    name: "firstGuess",
    message: "Guess your first letter",
  },
];

function playGame() {
  inquirer
    .prompt(firstQuestions)
    .then(function (firstAnswers) {
      console.log(firstAnswers);
      return inquirer.prompt(secondQuestions);
    })
    .then(function (secondAnswers) {
      console.log(secondAnswers);

      console.log(game.wordToGuess);
      console.log(secondAnswers);
      for (let i = 0; i < game.wordToGuess.length; i++) {
        if (secondAnswers === game.wordToGuess[i]) console.log("yay");
      }

      return inquirer.prompt(thirdQuestions);
    });
}

playGame();
