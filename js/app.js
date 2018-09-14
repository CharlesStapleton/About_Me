'use strict';

// Intro / UserName Question
var userName = prompt('Hi, I\'m Charles! What\'s your name?');
alert('Hey there ' + userName + '! I\'m gonna have you play a guessing game about me. Please answer with Y/N or Yes/No.');
console.log('What is your name: ' + userName);

// Doom 2016 Game of the Year Question
var doom = prompt('Was Charles\' Game of the Year for 2016 Doom?');
var doomUppercase = doom.toUpperCase();
if (doomUppercase === 'Y' || doomUppercase === 'YES') {
  alert('Correct! You\'ve got good taste.');
} else if (doomUppercase === 'N' || doomUppercase === 'NO') {
  alert('Wrong. I can\'t believe you\'ve done this.');
} else {
  alert('Please answer with Y/N or Yes/No.');
}
console.log('Was Doom Charles\' 2016 Game of the Year? User guessed: ' + doom);

// Favorite Sport Question
var favSport = prompt('Is Basketball Charles\' favorite sport?');
var favSportUppercase = favSport.toUpperCase();
if (favSportUppercase === 'Y' || favSportUppercase === 'YES') {
  alert('Correct! Ball is life.');
} else if (favSportUppercase === 'N' || favSportUppercase === 'NO') {
  alert('Wrong. Ball is life.');
} else {
  alert('Please answer with Y/N or Yes/No.');
}
console.log('Is Basketball Charles\' favorite sport? User guessed: ' + favSport);
