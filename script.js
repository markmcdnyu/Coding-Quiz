//Select the elements
var navTimer = document.querySelector("#time");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var startButton = document.getElementById("startBtn");
var beginDiv = document.querySelector("#instructions");
var questionDiv = document.querySelector("#question");
var quizCard = document.querySelector("#quizCard");


//Declare variables

//Will use this to track the questions left in the quiz
var i = 0;

//Track the seconds remaining 
var secondsRemain = 90;

//Used to store the seconds remaining in the quiz
var interval = 0;

//track the card the user is on
var activeDiv = beginDiv; 

// Quiz questions and answers. Trying an array for everything.
var questions = [
    [
        "Question 1:  What is the corect top-line of an HTML file?",
        "A. <!DOCUMENTTYPE html>",
        "B. <!DOCTYPE html>",
        "C. <!DOCTYPE CSS>",
        "D. <DOCtype html>",
        "B. <!DOCTYPE html>",

    ],[
        "Question 2:  What does CSS stand for?",
        "A. Cascading Style Sheets",
        "B. Customized Style Sheets",
        "C. Central Stagnant Section",
        "D. Clear Symbol System",
        "A. Cascading Style Sheets",
    ],[
        "Question 3:  What is the correct syntax for declaring an empty array 'a' in Javascript?",
        "A. a = [];",
        "B. let array = ();",
        "C. let a = [];",
        "D. Array = [empty];",
        "C. let a = [];",
    ],[
        "Question 4:  Inside which HTML element do we put the JavaScript?",
        "A. <script>",
        "B. <js>",
        "C. <scripting>",
        "D. <javascript>",
        "A. <script>",
    ],[
        "Question 5:  How do you create a function in JavaScript called myFunction?",
        "A. function:myFunction",
        "B. function = myFunction()",
        "C. function myFunction()",
        "D. myFunction = function",
        "B. function myFunction()",
    ]
];

//Need a function to show the questions
function showQuestion(index) {
    questionDiv.innerHTML = questions [index][0];
    answerA.value = questions[index][1];
    answerB.value = questions[index][2];
    answerC.value = questions[index][3];
    answerD.value = questions[index][4];
}

//Need a check answer function 
function checkAnswers (index) {
    var select = "";
    if (index === 1) {
        select = answerA;
    } else if (index === 2) {
        select = answerB;
    } else if (index === 3) {
        select = answerC;  
    } else {
        select = answerD;
    }
    ///have to do more here for the -10 seconds wrong answers
}

//Need a function to start the quiz and start the timer countdown in the nav bar
function beginQuiz(){
    interval = setInterval(function() {
        navTimer.innerHTML = secondsRemain;
        secondsRemain = secondsRemain -1;
        navTimer.innerHTML = secondsRemain;

        if (secondsRemain === 0) {
            navTimer.innerHTML = secondsRemain;
            clearInterval(interval);
        }
    }, 1000);

    beginDiv.classList.toggle("collapse");
    quizCard.classList.toggle("collapse");
    activeDiv = quizCard;
    showQuestion(i);
}



//Need an eventListener for the Start button click
startButton.addEventListener("click", beginQuiz);

//Need tracking of addEventListner for ever answer selected 
answerA.addEventListener("click", function () {
    checkAnswers(1);
});
answerB.addEventListener("click", function () {
    checkAnswers(2);
});
answerC.addEventListener("click", function () {
    checkAnswers(3);
});
answerD.addEventListener("click", function () {
    checkAnswers(4);
});