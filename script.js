//Select the elements
var navTimer = document.querySelector("#time"); //check
var navScore = document.querySelector("#score"); //check 
var startButton = document.getElementById("startBtn"); //check
var answerA = document.querySelector("#answerA");   //check
var answerB = document.querySelector("#answerB"); //check
var answerC = document.querySelector("#answerC"); //check
var answerD = document.querySelector("#answerD"); //check
var beginDiv = document.querySelector("#instructions"); //check
var questionDiv = document.querySelector("#question"); //check
var quizCard = document.querySelector("#quizCard"); //check
var quizscoreDiv = document.querySelector("#scorecard");  
var finalScore = document.querySelector("#finalScore");
var initialsInput = document.getElementById("initials");
var submitScorebtn = document.getElementById("submitscore");
var scoreHistoryDiv = document.querySelector("#scorehistory");
var finalScorelist = document.querySelector("#scorelist");
var goBackbtn = document.getElementById("goBack");
var clearHistorybtn = document.getElementById("clearHistory");


//Declare variables

//Will use this to track the questions left in the quiz
var i = 0;

//Track the seconds remaining 
var secondsRemain = 90;

//Score at 0
var score = 0;

//Used to store the seconds remaining in the quiz
var interval = 0;

//track the card the user is on
var activeDiv = beginDiv; 

// Quiz questions and answers. Trying an array for everything.
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

retain();

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

  
    if (selected.value === questions[i][5]) {
        alert("Correct!");
        score += 20;
        navScore.textContent = score;
    } else {
        alert("Sorry. Wrong Answer. Try again.");
        secondsRemain = secondsRemain -10;
        navTimer.innerHTML = secondsRemain;
    }

    if (i === 4) {
		clearInterval(interval);
		quizCard.classList.toggle("collapse");
		quizscoreDiv.classList.toggle("collapse");
		activeDiv = quizscoreDiv;
		finalScore.innerHTML = secondsLeft;
		timerNav.innerHTML = secondsLeft;
	} else {
		i = i + 1;
		showQuestion(i);
	}
}

function listofscores() {
	finalScorelist.innerHTML = "";
	for (var i = 0; i < scores.length; i++) {
		var li = document.createElement("li");
		li.textContent = i + 1 + " - " + scores[i];
		li.setAttribute("class", "list-group-item");
		finalScorelist.appendChild(li);
	}
}


function scoreHistory() {
	var initials = initialsInput.value;
	var scoreEntry = initials + " - " + secondsLeft;
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

function goBack() {
	scoreHistoryDiv.classList.toggle("collapse");
	introDiv.classList.toggle("collapse");
	activeDiv = introDiv;
	secondsLeft = 75;
	timerNav.innerHTML = secondsLeft;
	i = 0;
}

function clearHistory() {
	scores = [];
	localStorage.setItem("scores", JSON.stringify(scores));
	listofscores();
}

function retain() {
	var storedScores = JSON.parse(localStorage.getItem("scores"));
	if (storedScores !== null) {
		scores = storedScores;
	}
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

// This adds an event listener to map the scoreHistory() function to the submit score button once the button is clicked.
submitScorebtn.addEventListener("click", scoreHistory);

// This adds an event listener to map the goBack() function to the go back button once the button is clicked.
goBackbtn.addEventListener("click", goBack);

// This adds an event listener to map the clearHistory() function to the clear history button once the button is clicked.
clearHistorybtn.addEventListener("click", clearHistory);