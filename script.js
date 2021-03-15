var startTimer = document.getElementById("startTimer");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var questionBox = document.getElementById("question-box");
var submitScoreBox = document.getElementById("submit-score")
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var leaderboardSection = document.getElementById("leaderboard")
var leaderboard = document.getElementById('leaderboard-list')
var reset = document.getElementById("reset");



var timeRemaining =30;
var winCount = 0;
var questionCount = 0;
var savedData = [
    {
    initialsSaved: initials.value,
    score: winCount,
    },
];
console.log(savedData)
startTimer.addEventListener("click", timer);
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);
submit.addEventListener("click", displayLeaderboard);
reset.addEventListener("click", resetFunction);

function timer() {
    displayQuestion();
    var timerInterval = setInterval(function(){
    startTimer.value = `${timeRemaining} seconds left.`;
    timeRemaining--;
    startTimer.setAttribute("style", "font-size: 1.75rem; color: var(--oxford-blue); background-color: var(--light-cornflower-blue); box-shadow: none; border: none;")

    if (timeRemaining <= -1 || questionCount === 4) {
        clearInterval(timerInterval);
        startTimer.value = "Finished";
        endGame();
        return
    }
    }, 1000);

};

function displayQuestion() {
    
    if (questionCount === questions.length) {
        endGame();
    } else {
    question.textContent = questions[questionCount].question;
    answer1.value = questions[questionCount].answer1;
    answer2.value = questions[questionCount].answer2;
    answer3.value = questions[questionCount].answer3;
    answer4.value = questions[questionCount].answer4;
    };
    
};

function checkAnswer(event) {
    
    if (event.target.value === answers[questionCount]) {
        winCount++;
        console.log(winCount)
    } else {
        timeRemaining = timeRemaining - 10;
        console.log(timeRemaining);
    };
    questionCount++;
    displayQuestion();
    
};

function endGame (event) {
    
    startTimer.setAttribute("style", "display: none;");
    questionBox.setAttribute("style", "display: none;");
    initials.setAttribute("style", "display: inline-block;");
    submitScoreBox.setAttribute("style", "display: inline-block;");
    submit.setAttribute("style", "display: inline-block;");
    
};

function displayLeaderboard (event) {
    event.stopPropagation();

    localStorage.setItem("initials", JSON.stringify(savedData));
    
    console.log(pastScoresArray);
    var scoreListItem = document.createElement("li");
    var scoreStored = scoreListItem.textContent = "Initials: " + initials.value + "    ||    Score: " + winCount;
    leaderboard.appendChild(scoreListItem);
   
    reset.setAttribute("style", "display: inline-block;")
    leaderboard.setAttribute("style", "display: inline-block; padding: 1rem;")
    leaderboardSection.setAttribute("style", "display: inline-block;")
    initials.setAttribute("style", "display: none;");
    submitScoreBox.setAttribute("style", "display: none;");
    submit.setAttribute("style", "display: none;");
    scoreListItem.setAttribute("style", "display: inline-block;");
};   

function resetFunction () {
    
    
    
    
    // var scoreListItem = document.createElement("li");
    // var scoreStored = scoreListItem.textContent = "Initials: " + pastScores.initialsSaved + "    ||    Score: " + pastScores.score;
    // leaderboard.appendChild(scoreListItem);
    location.reload();
};


var pastScores = JSON.parse(localStorage.getItem("initials"));
// console.log(pastScoresArray);
// if (pastScores !== null) {  
//     pastScoresArray = pastScores;
// var scoreListItem = document.createElement("li");
// var scoreStored = scoreListItem.textContent = "Initials: " + savedData.initialsSaved + "    ||    Score: " + pastScores.score;
// leaderboard.appendChild(scoreListItem);
// };

// for (var i = 0; i < pastScoresArray.length; i++){
//     var pastScoresArr = pastScoresArray[i]
//     var scoreListItem = document.createElement("li");
//     var scoreStored = scoreListItem.textContent = "Initials: " + pastScores.initialsSaved + "    ||    Score: " + pastScores.score;
//     leaderboard.appendChild(scoreListItem);
// }


var questions = [
    {   question:"Which is NOT a primitive data type?",
        answer1: "Object",
        answer2: "String",
        answer3: "Number",
        answer4: "Boolean",
        
    },
    {   question: "What is the basic syntax of an if statement",
        answer1: "if {};",
        answer2: "if () {};",
        answer3: "if {} ();",
        answer4: "if ();",
    },    
    {   question: "Which symbols represent 'or'?",
        answer1: "&&",
        answer2: "++",
        answer3: "||",
        answer4: "%%",
        
    },
    {   question: "Which is NOT a way of declaring a variable? ",
        answer1: "var",
        answer2: "set",
        answer3: "let",
        answer4: "const",
        
    },
];

var answers = ["Object", "if () {};", "||", "set"]

