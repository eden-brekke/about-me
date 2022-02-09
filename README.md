# about-me

## LAB - 2
About me 
Creating a website about me, with a simple prompt driven JavaScript guessing game about myself. Practicing if/else statements in JavaScript and CSS styling.

 <br>

Author: Eden with Help from Taneesha 
 <br>

Links and Resources <br>
[For Sticky Navigation Bar](https://gomakethings.com/how-to-create-a-sticky-navigation-with-only-css/)

 <br>
Reflections and Comments <br>
**How did this go, overall?** *Things went pretty well! If/else statements seem to be working nicely, CSS is a bit tricky but I think I'm getting it.*  <br>
**What observations or questions do you have about what you’ve learned so far?** *I've been trying to figure out how to make the boxes of my elements in CSS be a bit more form fit to the content inside. I found that padding/margins can kind of aid in this but I imagine that might get a little messy with different devices, I.e will it still show up how I want it to on mobile devices as it does in my browser?*  <br>
**How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?** *It took me about three and a half hours to complete the assignment, and I honestly didn't really think about how long it would take before I started, just went in headfirst.* <br>

The Unresolved Issues: (Now Resolved!!) 

1. For some reason for my first question prompt if you answer "yes" it will return both the alert for yes and alert for no. when looking at my code I can't figure out how to fix this issue, looks like it should work to me :(  <br> 
  ** I figured it out! I had an extra semicolon next to my "if(answer === no || answer === n) making it so it would run no matter what ** <br>

2. I'm having issues with linking my css and js files to my html files. I can either have them linked corrected for GitHub or Linked correctly for LiveServer.<br> 

**I figured it out! I had opened VS code from the wrong directory (one parent folder up) that was causing the issue! ** <br> 

//*For Correct GitHub linkage I use <br>


//< link rel="stylesheet" href="css/reset.css"><br>
//  < link rel="stylesheet" href="css/style.css"><br>

//< script src="js/app.js">< /script><br>
//For Correct Live Server Linkage I need to add /about-me/ to the file
//paths<br>

//< link rel="stylesheet" href="/about-me/css/reset.css"><br>
// < link rel="stylesheet" href="/about-me/css/style.css"><br>
//< script src="/about-me/js/app.js">< /script><br>

//never both :( :( I've consistently had this problem originating in code 102. I'm not sure why it's happening, the way I need to link it for Live Server doesn't make much sense, since my js and css folders are within the about-me folder, I know I shouldn't need to specify that that is where they are, alas, it wont work when I use the GitHub code shown above. * 
<br>

## LAB - 3
About me- Extending the about me page!
Adding in 
“Top Ten” at the bottom of your HTML page as an ordered list in HTML. 

Convert your work experience and education summary into an unordered list using HTML

Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.

As a user, I would like to know my final score so that I can know how well I did.
Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
