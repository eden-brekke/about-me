'use strict';

console.log('Hey world hey!');

let userName = prompt('What is your name?');
alert('Welcome ' + userName + ' please play my guessing game!');

let answerOne = prompt('Am I an aniaml person?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  alert('Yes I love all animals!');
  //console.log('They answered ' + answerOne + ' which is correct! I do love animals');
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('Sorry, I love all animals!');
  //console.log('They answered ' + answerOne + ' which is wrong, I love animals');
}

let answerTwo = prompt('Do I have a dog?').toLowerCase();

if(answerTwo === 'yes' || answerTwo ==='y'){
  alert('Sorry! I don\'t have any dogs!');
 // console.log('They answered ' + answerTwo + ' which is incorrect, I don\'t have any dogs!');
} else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('Correct! I don\'t have a dog, a little sad.');
  //console.log('They answered ' + answerTwo + ' which is correct, I don\' have a dog.');
}

let answerThree = prompt('Am I a good cook?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  alert('Yes! At least my partner thinks so!');
  console.log('They answered ' + answerThree + ' They think I\'m a good cook!');
} else if(answerThree === 'no' || answerThree === 'n'){
  alert('Aw rude, I guess maybe not? My partner thinks I am');
 // console.log('They answered ' + answerThree + ' very rude, they don\'t think I\'m a good cook.');

}


let answerFour = prompt('Do I like to create art?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  alert('I think that everyone creates art in their own way! Yes I love art!');
 // console.log('They answered ' + answerFour + ' Correct! I love art!');
} else if(answerFour === 'no' || answerFour === 'n'){
  alert('Incorrect! I love art!');
  console.log('They answered ' + answerFour + ' which is incorrect I love art');
}

let answerFive = prompt('Do I run marathons?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  alert('Haha you funny, heck no! I wish I had that dedication');
 // console.log('they answered ' + answerFive + ' which is wrong, I don\'t run marathons');
} else if(answerFive === 'no' || answerFive === 'n'){
  alert('Correct! I wish I had that dedication to health!');
  //console.log('They answered ' + answerFive + ' which is correct! I don\'t run marathons!');
}

alert('Thanks ' + userName + ' for playing my guessing game! Here\'s a site about me!');