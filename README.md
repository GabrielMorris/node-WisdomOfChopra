# node-WisdomOfChopra

node-WisdomOfChopra is a Node.js reimplementation of [skepticCanary's WisdomOfChopra](https://github.com/skepticCanary/WisdomOfChopra) that was written in PHP. I needed a Node version of this for a Discord bot of mine and thought it would be a nice little project for getting familiar with creating a npm module.

All credit goes to skepticCanary!

## Usage
Import the module

    const wisdom = require("wisdom.js");
    
Call getQuotes() method

    // Sets wiseWords to "The cosmos is beyond infinite observations"
    let wiseWords = wisdom.getQuote(); 
