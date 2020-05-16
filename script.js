//Select the elements
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let startButton = document.getElementById("start");
let beginDiv = document.querySelector("#instructions");
let questionDiv = document.querySelector("#question");


//Declare variables

//Will use this to track the questions left in the quiz
let i = 0;

//Track the seconds remaining 
let secondsRemain = 90;

//Used to store the seconds remaining in the quiz
let interval = 0;

// Quiz questions and answers. Trying an array for everything.
let questions = [
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

//Need a function to start the quiz
function beginQuiz(){

}

//Need a function to load the question
function showQuestion() {

}

//Need a check answer function 
function checkAnswers () {
    
}