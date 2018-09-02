'use strict';
const quotes = require('./quotes.json');

exports.getQuote = function() {
  // Get random number between 0-100
  let random = Math.floor(Math.random() * 100);

  // Small probability of animal based quote
  if (random < 5) {
    return generateAnimalQuote(quotes);
  } else {
    // Get four random numbers for the four random parts of a quote
    let randomNumberArray = generateRandomNumberArray(quotes);

    // Return quote string
    return generateQuoteString(quotes, randomNumberArray);
  }

  // Function for getting random number based on part length
  function getRandom(part) {
    return Math.floor(Math.random() * part);
  }

  // Function for generating quote string
  function generateQuoteString(quotes, randArr) {
    return `${quotes.partOne[randArr[0]]} ${quotes.partTwo[randArr[1]]} ${
      quotes.partThree[randArr[2]]
    } ${quotes.partFour[randArr[3]]}`;
  }

  // Function for generating animal quote string
  function generateAnimalQuote(quotes) {
    let randOne = getRandom(quotes.animalsOne.length);
    let randTwo = getRandom(quotes.animalsTwo.length);

    return `${quotes.animalsOne[randOne]} are ${quotes.animalsTwo[randTwo]}`;
  }

  // Function for generating random numbers
  function generateRandomNumberArray(quotes) {
    return [
      getRandom(quotes.partOne.length),
      getRandom(quotes.partTwo.length),
      getRandom(quotes.partThree.length),
      getRandom(quotes.partFour.length)
    ];
  }
};
