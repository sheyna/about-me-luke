'use strict';

// proof life
// console.log('hi');

let userName = prompt('What is your name?');

alert('Hi ' + userName + '.' + ' Welcome to my website!');

let doIHavePets = prompt('Do I have any pets? Yes or no?');

if(doIHavePets.toLowerCase() === 'yes' || doIHavePets.toLowerCase() === 'y') {
  //console.log('That is incorrect. I do not have any pets.');
  alert('That is incorrect. I do not have any pets.');
} else if (doIHavePets.toLowerCase() === 'no' || doIHavePets.toLowerCase() === 'n') {
  //console.log('Correct! I do not have any pets.');
  alert('Correct! I do not have any pets.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

let question1CorrectAnswer = 0;

if (doIHavePets.toLowerCase() === 'no' || doIHavePets.toLowerCase() === 'n') {
  question1CorrectAnswer = 1;
} else {
  question1CorrectAnswer = 0;
}

let didILiveInColorado = prompt('Did I live in Colorado? Yes or no?');

if(didILiveInColorado.toLowerCase() === 'yes' || didILiveInColorado.toLowerCase() === 'y') {
  //console.log('Correct! I did live in Colorado.');
  alert('Correct! I did live in Colorado.');
} else if (didILiveInColorado.toLowerCase() === 'no' || didILiveInColorado.toLowerCase() === 'n') {
  //console.log('That is incorrect. I did live in Colorado.');
  alert('That is incorrect. I did live in Colorado.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

let question2CorrectAnswer = 0;

if (didILiveInColorado.toLowerCase() === 'yes' || didILiveInColorado.toLowerCase() === 'y') {
  question2CorrectAnswer = 1;
} else {
  question2CorrectAnswer = 0;
}

let doIWantToBeAstronaut = prompt('Do I want to be an astronaut someday? Yes or no?');

if(doIWantToBeAstronaut.toLowerCase() === 'yes' || doIWantToBeAstronaut.toLowerCase() === 'y') {
  //console.log('That is incorrect. I want to be a Team Leader at a big tech company.');
  alert('That is incorrect. I want to be a Team Leader at a big tech company.');
} else if (doIWantToBeAstronaut.toLowerCase() === 'no' || doIWantToBeAstronaut.toLowerCase() === 'n') {
  //console.log('Correct! I want to be a Team Leader at a big tech company.');
  alert('Correct! I want to be a Team Leader at a big tech company.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

let question3CorrectAnswer = 0;

if (doIWantToBeAstronaut.toLowerCase() === 'no' || doIWantToBeAstronaut.toLowerCase() === 'n') {
  question3CorrectAnswer = 1;
} else {
  question3CorrectAnswer = 0;
}

let didIGoToUW = prompt('Did I go to the University of Washington? Yes or no?');

if(didIGoToUW.toLowerCase() === 'yes' || didIGoToUW.toLowerCase() === 'y') {
  //console.log('That is incorrect. I went to Wheaton College.');
  alert('That is incorrect. I went to Wheaton College.');
} else if (didIGoToUW.toLowerCase() === 'no' || didIGoToUW.toLowerCase() === 'n') {
  //console.log('Correct! I went to Wheaton College.');
  alert('Correct! I went to Wheaton College.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

let question4CorrectAnswer = 0;

if (didIGoToUW.toLowerCase() === 'no' || didIGoToUW.toLowerCase() === 'n') {
  question4CorrectAnswer = 1;
} else {
  question4CorrectAnswer = 0;
}

let doILoveSports = prompt('Do I love sports? Yes or no?');

if(doILoveSports.toLowerCase() === 'yes' || doILoveSports.toLowerCase() === 'y') {
  //console.log('Correct! I do love sports.');
  alert('Correct! I do love sports.');
} else if (doILoveSports.toLowerCase() === 'no' || doILoveSports.toLowerCase() === 'n') {
  //console.log('That is incorrect. I do love sports.');
  alert('That is incorrect. I do love sports.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

let question5CorrectAnswer = 0;

if (doILoveSports.toLowerCase() === 'yes' || doILoveSports.toLowerCase() === 'y') {
  question5CorrectAnswer = 1;
} else {
  question5CorrectAnswer = 0;
}

let guessNumber = prompt('Guess a number between 1 and 10');
guessNumber = parseInt(guessNumber);

let guessNumberAttempts = 4;

while (guessNumberAttempts) {
  if(guessNumber > 2) {
    alert(`That number is too high. You have ${guessNumberAttempts} attempts remaining.`);
    guessNumber = prompt('Try again. Guess a number between 1 and 10');
    guessNumber = parseInt(guessNumber);
  } else if(guessNumber < 2) {
    alert(`That number is too low. You have ${guessNumberAttempts} attempts remaining.`);
    guessNumber = prompt('Try again. Guess a number between 1 and 10');
    guessNumber = parseInt(guessNumber);
  } else if(guessNumber === 2) {
    alert('Congratulations! You are correct!');
    break;
  } else if (isNaN (guessNumber)) {
    alert('Invalid answer!');
    guessNumber = prompt('Try again. Guess a number between 1 and 10');
  }
  guessNumberAttempts--;
}
console.log (guessNumber);
if (guessNumberAttempts <= 0) {
  alert('You have run out of attempts! The corrrect answer was 2.');
}

let question6CorrectAnswer = 0;

if (guessNumber === 2) {
  question6CorrectAnswer = 1;
} else {
  question6CorrectAnswer = 0;
}

let topTenShows = ['The Office', 'Game of Thrones', 'Parks and Rec', 'Severence', 'Lost', 'New Girl', 'Friends', 'The Umbrella Academy', 'Band of Brothers', 'Friday Night Lights'];


let guessShowAttempts = 6;
let userShowGuess;

while (guessShowAttempts > 0) {
  userShowGuess = prompt('What is one of my favorite shows?');
  let isGuessCorrect = false;
  for (let i = 0; i < topTenShows.length; i++) {
    // console.log(userShowGuess, topTenShows[i], userShowGuess.toLowerCase() === topTenShows[i].toLowerCase());
    if (userShowGuess.toLowerCase() === topTenShows[i].toLowerCase()) {
      isGuessCorrect = true;
      break;
    }
    // userShowGuess = prompt('Try again. What is one of my favorite shows?');
  }
  if (isGuessCorrect) {
    alert('Correct! That show is in my top ten!');
    break;
  } else {
    guessShowAttempts--;
    alert(`Incorrect. That is not in my top ten. You have ${guessShowAttempts} attempts remaining.`);
  }
  // if (!boolValue) {
  //   break;
  // }
  // guessShowAttempts--;
}
// if (!guessShowAttempts) {
//   alert('You have no more attempts remaining');
// }

let question7CorrectAnswer = 0;

if (userShowGuess === topTenShows) {
  question7CorrectAnswer = 1;
} else {
  question7CorrectAnswer = 0;
}

let score = alert(`You recieved a score of ${question1CorrectAnswer + question2CorrectAnswer + question3CorrectAnswer + question4CorrectAnswer + question5CorrectAnswer + question6CorrectAnswer + question7CorrectAnswer} out of 7 possible points`);

score;

alert('You may now enter my website, ' + userName + '.');
