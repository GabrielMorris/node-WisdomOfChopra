"use strict";
const quotes = require("./quotes.json");

exports.getQuote = function() {
  let random = Math.floor(Math.random() * 100);

  if (random < 2) {
    return `${quotes.animalsOne} are ${quotes.animalsTwo}`;
  } else {
    let randomOne = Math.floor(Math.random() * quotes.partOne.length);
    let randomTwo = Math.floor(Math.random() * quotes.partTwo.length);
    let randomThree = Math.floor(Math.random() * quotes.partThree.length);
    let randomFour = Math.floor(Math.random() * quotes.partFour.length);

    return `${quotes.partOne[randomOne]} ${quotes.partTwo[randomTwo]} ${
      quotes.partThree[randomThree]
    } ${quotes.partFour[randomFour]}`;
  }
};
