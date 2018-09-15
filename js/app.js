'use strict';

// // Intro / UserName Question
// var userName = prompt('Hi, I\'m Charles! What\'s your name?');
// alert('Hey there ' + userName + '! I\'m gonna have you play a guessing game about me. Please answer with Y/N or Yes/No.');
// console.log('What is your name: ' + userName);

// // Doom 2016 Game of the Year Question
// var doom = prompt('Was Charles\' Game of the Year for 2016 Doom?');
// var doomUppercase = doom.toUpperCase();
// if (doomUppercase === 'Y' || doomUppercase === 'YES') {
//   alert('Correct! You\'ve got good taste.');
// } else if (doomUppercase === 'N' || doomUppercase === 'NO') {
//   alert('Wrong. I can\'t believe you\'ve done this.');
// } else {
//   alert('Please answer with Y/N or Yes/No.');
// }
// console.log('Was Doom Charles\' 2016 Game of the Year? User guessed: ' + doom);

// // Favorite Sport Question
// var favSport = prompt('Is Basketball Charles\' favorite sport?');
// var favSportUppercase = favSport.toUpperCase();
// if (favSportUppercase === 'Y' || favSportUppercase === 'YES') {
//   alert('Correct! Ball is life.');
// } else if (favSportUppercase === 'N' || favSportUppercase === 'NO') {
//   alert('Wrong. Ball is life.');
// } else {
//   alert('Please answer with Y/N or Yes/No.');
// }
// console.log('Is Basketball Charles\' favorite sport? User guessed: ' + favSport);

// // Favorite Color Question
// var favColor = prompt('Is Green Charles\' favorite color?');
// var favColorUppercase = favColor.toUpperCase();
// if (favColorUppercase === 'Y' || favColorUppercase === 'YES') {
//   alert('Wrong! It\'s Orange. Green is a runner up tho.');
// } else if (favColorUppercase === 'N' || favColorUppercase === 'NO') {
//   alert('Correct! Orange is best.');
// } else {
//   alert('Please answer with Y/N or Yes/No.');
// }
// console.log('Is Green Charles\' favorite color? User guessed: ' + favColor);

// // Perfect Question
// var perfect = prompt('Is Charles perfect?');
// var perfectUppercase = perfect.toUpperCase();
// if (perfectUppercase === 'Y' || perfectUppercase === 'YES') {
//   alert('Correct! I\'ve never done anything wrong.');
// } else if (perfectUppercase === 'N' || perfectUppercase === 'NO') {
//   alert('Incorrect! I\'ve never done anything wrong.');
// } else {
//   alert('Please answer with Y/N or Yes/No.');
// }
// console.log('Is Charles perfect? User guessed: ' + perfect);

// // Cat Question
// var cat = prompt('Does Charles own a cat?');
// var catUppercase = cat.toUpperCase();
// if (catUppercase === 'Y' || catUppercase === 'YES') {
//   alert('Correct! Her name is Tux and she is also perfect.');
// } else if (catUppercase === 'N' || catUppercase === 'NO') {
//   alert('Wrong! I own a cat, her name is Tux and she is also perfect.');
// } else {
//   alert('Please answer with Y/N or Yes/No.');
// }
// console.log('Does Charles own a cat? User guessed: ' + cat);

// How Many Pets Question
var numOfPets = '6';
var guesses = 4;

while (guesses > 0) {
  var petsGuess = prompt('How many pets has Charles owned so far? You\'ve got 4 tries.');
  if (petsGuess === numOfPets) {
    alert('Correct! I\'ve owned 6 pets so far.');
    break;
  } if (petsGuess<'6') {
    alert('Nope! Too low.');
    guesses--;
  } if (petsGuess>'6') {
    alert('Nope! Too high.');
    guesses--;
  }
}

// for (var i=0; i<4; i++) {
//   if (petsGuess === numOfPets) {
//     alert('Correct! I\'ve owned 6 pets so far.');
//     break;
//   } else if (petsGuess<6) {
//     alert('Nope! Too low.');
//     // petsGuess = prompt('How many pets has Charles owned so far? You\'ve got 4 tries.');
//   } else if (petsGuess>6) {
//     alert('Nope! Too high.');
//     // petsGuess = prompt('How many pets has Charles owned so far? You\'ve got 4 tries.');
//   }
//   // } if (i<4) {
//   //   alert('You\'re out of guesses! I\'ve owned 6 pets so far.');
//   // } else {
//   //   prompt('Nope! Guess again.');
//   // }
// }