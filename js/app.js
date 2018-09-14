'use strict';

// Intro / UserName Question
var userName = prompt('Hi, I\'m Charles! What\'s your name?');
alert('Hey there ' + userName + '! I\'m gonna have you play a guessing game about me. Please answer with Y/N or Yes/No.');
console.log('What is your name: ' + userName);

// Doom Question
var doom = prompt('Was Charles\' Game of the Year for 2016 Doom?');
var doomUppercase = doom.toUpperCase();
if (doomUppercase === 'Y' || doomUppercase === 'YES') {
  alert('Correct! You\'ve got good taste.');
} else if (doomUppercase === 'N' || doomUppercase === 'NO') {
  alert('Wrong. I can\'t believe you\'ve done this.');
} else {
  alert('Please answer with Y/N or Yes/No.');
}
console.log('Doom was Charles\' 2016 Game of the Year: ' + doom);
