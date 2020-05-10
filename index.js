//// Constructor initialize
var Word = require("./word.js");
var inquirer = require("inquirer");

// letters entry
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of words to choose from
var countries = ["argentina", "united states", "england", "africa", "brazil", "spain", "mexico", "italy", "france", "china", "japan", "hungary", "uruguay", "greece", "Bali", "chile", "ecuardor", "finland", "russia", "thailand", "slovakia", "australia", "portugal", "canada", "new zealand", "ireland", "germany", "iceland", "norway", "india", "vietnam", "switzerland", "indonesia", "nepal"];

// Pick Random index from countries array
var randomIndex = Math.floor(Math.random() * countries.length);
var randomWord = countries[randomIndex];

// Pass random word through Word constructor
computerWord = new Word(randomWord);

var requireNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;

function knowledge() {

    // Generates new word for Word constructor if true
    if (requireNewWord) {
        // Selects random countries array
        var randomIndex = Math.floor(Math.random() * countries.length);
        var randomWord = countries[randomIndex];

        // Passes random word through the Word constructor
        computerWord = new Word(randomWord);

        
        requireNewWord = false;
    }


    // TestS if a letter guessed is correct
    var wordComplete = [];
    computerWord.objArray.forEach(completeCheck);

   