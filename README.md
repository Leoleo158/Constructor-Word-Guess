# Constructor-Word-Guess

Game Information: This is a node.js based application with interactive prompts on the command-line. Enjoy this interactive country guessing game!

The game requires inquirer npm package.
Letter.js: Contains a constructor, Letter. This constructor displays a blank placeholder depending on whether or not the user has guessed the letter.

Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.

index.js: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it

Prompts the user for each guess and keeps track of the user's remaining guesses

Letter.js should not require any other files.

Word.js should only require Letter.js

Screenshots

<img width="1124" alt="Screen Shot 2020-05-09 at 8 39 37 PM" src="https://user-images.githubusercontent.com/61090406/81489961-11f0b400-9239-11ea-87f4-dcd09c9ce02a.png">
<img width="1117" alt="Screen Shot 2020-05-09 at 8 40 22 PM" src="https://user-images.githubusercontent.com/61090406/81489962-1321e100-9239-11ea-8e62-1568c11a80d4.png">
