'use strict';

console.log('Hey world hey!');

let ansCounter = 0;
let userName = prompt('What is your name?');
alert('Welcome ' + userName + ' please play my guessing game!');


let answerOne = prompt('Am I an aniaml person?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  ansCounter++;
  alert('Yes I love all animals!');
  //console.log('They answered ' + answerOne + ' which is correct! I do love animals');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('Sorry, I love all animals!');
  //console.log('They answered ' + answerOne + ' which is wrong, I love animals');
}

let answerTwo = prompt('Do I have a dog?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('Sorry! I don\'t have any dogs!');
  // console.log('They answered ' + answerTwo + ' which is incorrect, I don\'t have any dogs!');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  ansCounter++;
  alert('Correct! I don\'t have a dog, a little sad.');
  //console.log('They answered ' + answerTwo + ' which is correct, I don\' have a dog.');
}

let answerThree = prompt('Am I a good cook?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  ansCounter++;
  alert('Yes! At least my partner thinks so!');
  // console.log('They answered ' + answerThree + ' They think I\'m a good cook!');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Aw rude, I guess maybe not? My partner thinks I am');
  // console.log('They answered ' + answerThree + ' very rude, they don\'t think I\'m a good cook.');

}


let answerFour = prompt('Do I like to create art?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  ansCounter++;
  alert('I think that everyone creates art in their own way! Yes I love art!');
  // console.log('They answered ' + answerFour + ' Correct! I love art!');
} else if (answerFour === 'no' || answerFour === 'n') {
  alert('Incorrect! I love art!');
  // console.log('They answered ' + answerFour + ' which is incorrect I love art');
}

let answerFive = prompt('Do I run marathons?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  alert('Haha you funny, heck no! I wish I had that dedication');
  // console.log('they answered ' + answerFive + ' which is wrong, I don\'t run marathons');
} else if (answerFive === 'no' || answerFive === 'n') {
  ansCounter++;
  alert('Correct! I wish I had that dedication to health!');
  //console.log('They answered ' + answerFive + ' which is correct! I don\'t run marathons!');
}

alert(`Thanks ${userName} for playing my learning a little about me! You got ${ansCounter} out of 5 correct! Here's a little number game!`);

// let numberGame = prompt('I\'m thinking of a number between 1 and 10');
let correctNum = 5;
let guessAttempts = 0;
let userGuess = +prompt('I\'m thinking of a number between 1 and 10, you have 4 tries!');

while (guessAttempts <= 4 || userGuess !== 5) {
  if (userGuess > 5) {
    alert('That\'s not correct. You guessed too high');
    console.log(`user guessed ${userGuess}`);
    guessAttempts++;
    userGuess = +prompt(`You are at ${guessAttempts} guesses, try again!`);
  } else if (userGuess < 5 && guessAttempts < 4) {
    alert('That\'s not correct. You guessed too low');
    console.log(`user guessed ${userGuess}`);
    guessAttempts = guessAttempts++;
    userGuess = +prompt(`You are at ${guessAttempts} guesses, try again!`);
  } else if (userGuess === correctNum) {
    alert('You got it! I was thinking of the number 5!');
    ansCounter = ansCounter++;
    console.log(`They guessed the correct number ${userGuess}`);
    break;
  } else if (guessAttempts >= 4) {
    alert('Sorry you ran out of attempts!');
    break;
  }
}

alert(`Nice so far you've gotten ${ansCounter} out of 6 correct! How about one more game!`);

let sports = ['basketball', 'soccer', 'climbing', 'skating', 'ultimate frisbee', 'swimming'];
for(let i = 0; i <=6; i++){
  let questionSeven = prompt('Which sports have I participated in? There are six possible answers and you have six attempts to guess one!').toLowerCase();
  console.log(questionSeven);
  if(sports[0] === questionSeven || sports[1] === questionSeven || sports[2] === questionSeven|| sports[3] === questionSeven|| sports[4] === questionSeven|| sports[5] === questionSeven){
    alert(`Heck ye! I love ${questionSeven}!`);
    ansCounter++;
    i=6;
  }
}
alert(`I really enjoy ${sports}`);

alert(`Good Job! In total you got ${ansCounter} out of 7 answers correct! Now that you've endured all of those prompts and alerts. Enjoy my website!`);
