'use strict';

//declaring Correct Answer Tally and prompt for users Name
let ansCounter = 0;
let userName = prompt('What is your name?');
alert('Welcome ' + userName + ' please play my guessing game!');

//question One
function qOne() {
  let answerOne = prompt('Am I an aniaml person?').toLowerCase().trim();

  if (answerOne === 'yes' || answerOne === 'y') {
    ansCounter++;
    alert('Yes I love all animals!');
  } else if (answerOne === 'no' || answerOne === 'n') {
    alert('Sorry, I love all animals!');
  }
}
qOne();

//question two
function qTwo() {
  let answerTwo = prompt('Do I have a dog?').toLowerCase().trim();
  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Sorry! I don\'t have any dogs!');
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    ansCounter++;
    alert('Correct! I don\'t have a dog, a little sad.');
  }
}
qTwo();

//question three
function qThree() {
  let answerThree = prompt('Am I a good cook?').toLowerCase().trim();
  if (answerThree === 'yes' || answerThree === 'y') {
    ansCounter++;
    alert('Yes! At least my partner thinks so!');
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('Aw rude, I guess maybe not? My partner thinks I am');
  }
}
qThree();

//question four
function qFour() {
  let answerFour = prompt('Do I like to create art?').toLowerCase().trim();
  if (answerFour === 'yes' || answerFour === 'y') {
    ansCounter++;
    alert('I think that everyone creates art in their own way! Yes I love art!');
  } else if (answerFour === 'no' || answerFour === 'n') {
    alert('Incorrect! I love art!');
  }
}
qFour();

//question five
function qFive() {
  let answerFive = prompt('Do I run marathons?').toLowerCase().trim();
  if (answerFive === 'yes' || answerFive === 'y') {
    alert('Haha you funny, heck no! I wish I had that dedication');
  } else if (answerFive === 'no' || answerFive === 'n') {
    ansCounter++;
    alert('Correct! I wish I had that dedication to health!');
  }
}
qFive();

//End initial 5 question end and Correct Answer Tally
alert(`Thanks ${userName} for playing my little about me guessing game! You got ${ansCounter} out of 5 correct! Here's a quick number guessing game!`);

//while loop Number guessing game
function qSix() {
  let correctNum = 5;
  let guessAttempts = 4;
  let userGuess = +prompt('I\'m thinking of a number between 1 and 10, you have 4 tries!').toLowerCase().trim();

  while (guessAttempts) {
    if (userGuess > correctNum) {
      alert('That\'s not correct. You guessed too high');
      console.log(`user guessed ${userGuess}`);
      guessAttempts--;
      userGuess = +prompt(`You have ${guessAttempts} guesses left, try again!`);
    } else if (userGuess < correctNum && guessAttempts < correctNum) {
      alert('That\'s not correct. You guessed too low');
      console.log(`user guessed ${userGuess}`);
      guessAttempts--;
      userGuess = +prompt(`You have ${guessAttempts} guesses left, try again!`).toLowerCase().trim();
    } else if (userGuess === correctNum) {
      alert('You got it! I was thinking of the number 5!');
      ansCounter++;
      console.log(`They guessed the correct number ${userGuess}`);
      break;
    } else {
      alert('Sorry you ran out of attempts! it was the number 5!');
      break;
    }
  }
}
qSix();

alert(`Nice job so far ${userName} you've gotten ${ansCounter} out of 6 correct! How about one more game!`);

//For loop with an Array
function qSeven() {
  let sports = ['basketball', 'soccer', 'climbing', 'skating', 'ultimate frisbee', 'swimming'];
  for (let i = 0; i <= 6; i++) {
    let questionSeven = prompt('Which sports have I participated in? There are six possible answers and you have six attempts to guess one!').toLowerCase().trim();
    console.log(questionSeven);
    if (sports[0] === questionSeven || sports[1] === questionSeven || sports[2] === questionSeven || sports[3] === questionSeven || sports[4] === questionSeven || sports[5] === questionSeven) {
      alert(`Heck ye! I love ${questionSeven}!`);
      ansCounter++;
      i = 6;
    } else {
      alert('Sorry no, try again');
      i++;
    }
  }
  alert(`I really enjoy ${sports}`);
}
qSeven();

//final message
alert(`Good Job ${userName}! In total you got ${ansCounter} out of 7 answers correct! Now that you've endured all of those prompts and alerts. Enjoy my website!`);
