//Select the elements
var navTimer = document.querySelector("#time"); 
var navScore = document.querySelector("#score"); 
var startButton = document.getElementById("startBtn"); 
var answerA = document.querySelector("#answerA");   
var answerB = document.querySelector("#answerB"); 
var answerC = document.querySelector("#answerC"); 
var answerD = document.querySelector("#answerD"); 
var beginDiv = document.querySelector("#instructions"); 
var questionDiv = document.querySelector("#question"); 
var quizCard = document.querySelector("#quizCard"); 
var quizscoreDiv = document.querySelector("#scorecard");  
var finalScore = document.querySelector("#finalScore");
var nameInput = document.getElementById("name");
var submitScorebtn = document.getElementById("submitscore");
var scoreHistoryDiv = document.querySelector("#scorehistory");
var finalScorelist = document.querySelector("#scorelist");
var endQuizbtn = document.getElementById("endQuiz");


//Declare variables

//Will use this to track the number of questions left in the quiz
var i = 0;

//Track the seconds remaining 
var secondsRemain = 90;

//Start score at 0
var score = 0;

//Used to store the seconds remaining in the quiz
var interval = 0;

//Need an empty scores array to store the scores into
var scores = [];

//track the card the user is on
var activeDiv = beginDiv; 

// Quiz questions and answers. Trying an array for everything. Some, but not all, questions and answers were taken from w3schools https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
var questions = [
    [
        "Question 1:  What is the correct top-line of an HTML file?",
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
        "C. function myFunction()",
    ]
];


//function used to store scores
keepScores();

//Need a function to show the questions
function showQuestion(index) {
    questionDiv.innerHTML = questions [index][0];
    answerA.value = questions[index][1];
    answerB.value = questions[index][2];
    answerC.value = questions[index][3];
    answerD.value = questions[index][4];
}

//Need a check answer function 
function checkAnswers(index) {
    var selected = "";
    if (index === 1) {
        selected = answerA;
    } else if (index === 2) {
        selected = answerB;
    } else if (index === 3) {
        selected = answerC;  
    } else {
        selected = answerD;
    }

        //Since I put the correct answer in the 5th index spot, check to see if that matches, then alert the user if they are right or wrong. NOt a fan of alert() but might use it
    if (selected.value === questions[i][5]) {
        alert("Correct!");
        score += 20;
        navScore.textContent = score;
    } else {
        alert("Sorry. Wrong Answer. Try again.");
        secondsRemain = secondsRemain -10;
        navTimer.innerHTML = secondsRemain;
    }
        //Track and see what question the user is on. If they are in the 4th array position, it is the last question, otherwise, increment by one and go again
    if (i === 4) {
		clearInterval(interval);
		quizCard.classList.toggle("collapse");
		quizscoreDiv.classList.toggle("collapse");
		activeDiv = quizscoreDiv;
		finalScore.innerHTML = score;
		timerNav.innerHTML = secondsLeft;
	} else {
		i = i + 1;
		showQuestion(i);
	}
}

//Need a loop and to use appendChild for the tracking and local storage of the users names and scores
function listofscores() {
	finalScorelist.innerHTML = "";
	for (var i = 0; i < scores.length; i++) {
		var li = document.createElement("li");
		li.textContent = i + 1 + " - " + scores[i];
		li.setAttribute("class", "list-group-item");
		finalScorelist.appendChild(li);
	}
}



// Going to need a loop or if/else logic to sort out who's scores would rank above/below each other when stored locally. 
//Not sure how to do this???



//Need a function to input the names and scores 
function scoreHistory() {
	var name = nameInput.value;
	var scoreEntry = name + " - " + score;
	scores.push(scoreEntry);
	localStorage.setItem("scores", JSON.stringify(scores));
	quizscoreDiv.classList.toggle("collapse");
	scoreHistoryDiv.classList.toggle("collapse");
	activeDiv = scoreHistoryDiv;
	listofscores();
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


//Need a function to end the whole quiz
function endQuiz() {
	scoreHistoryDiv.classList.toggle("collapse");
	introDiv.classList.toggle("collapse");
	activeDiv = beginDiv;
	secondsRemain = 90;
	timerNav.innerHTML = secondsRemain;
	i = 0;
}

//Need a function to store and track the scores -- pretty sure to use getItem?? and localstorage??
function keepScores() {
	var storedScores = JSON.parse(localStorage.getItem("scores"));
	if (storedScores !== null) {
		scores = storedScores;
	}
}


//Need a good number of eventListeners here!!!!!! 


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

// Add an eventlistener to map the scoreHistory() function to the Next button
submitScorebtn.addEventListener("click", scoreHistory);

//Add an eventlistener to map the endQuiz() function
endQuizbtn.addEventListener("click", endQuiz);
