# wisdom-of-chopra

wisdom-of-chopra is a Node.js reimplementation of [skepticCanary's WisdomOfChopra](https://github.com/skepticCanary/WisdomOfChopra) that was written in PHP. I needed a Node version of this for a Discord bot of mine and thought it would be a nice little project for getting familiar with creating a npm module.

All credit goes to skepticCanary!

## Usage

Install the package with npm

    npm install wisdom-of-chopra -s

Import the module

    const wisdom = require("wisdom-of-chopra");

Call getQuote() method

    let wiseWords = wisdom.getQuote();
