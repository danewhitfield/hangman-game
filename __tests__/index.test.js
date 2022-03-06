const { Hangman } = require("../index");

describe("Hangman", () => {
  test("guessLetter adds correct guess to correctLetters array", () => {
    const testHangman = new Hangman("crane");

    testHangman.guessLetter("a");

    expect(testHangman.correctLetters).toEqual(["", "", "a", "", ""]);
  });
  test("guessLetter wrong minuses a life", () => {
    const testHangman = new Hangman("crane");

    testHangman.guessLetter("w");

    expect(testHangman.lives).toEqual(4);
  });
});
