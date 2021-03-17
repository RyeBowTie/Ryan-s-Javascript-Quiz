
//  HTML Elements --------------------------------------------------------------------------------

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

//  Global Variables ---------------------------------------------------------------------------

var timeRemaining = 30;
var winCount = 0;
var questionCount = 0;

//  Event Listeners -----------------------------------------------------------------------------


startTimer.addEventListener("click", timer);
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);
submit.addEventListener("click", displayLeaderboard);
reset.addEventListener("click", resetFunction);

// Timer Function ----------------------------------------------------------------------------------

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

// Question Function ------------------------------------------------------------------------------

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

// CHeck ANswers Functions -----------------------------------------------------------------

function checkAnswer(event) {
    
    if (event.target.value === answers[questionCount]) {
        winCount++;
    } else {
        timeRemaining = timeRemaining - 10;
    };
    questionCount++;
    displayQuestion();
    
};

// Display End Game Function ---------------------------------------------------------------------

function endGame () {
    startTimer.setAttribute("style", "display: none;");
    questionBox.setAttribute("style", "display: none;");
    initials.setAttribute("style", "display: inline-block;");
    submitScoreBox.setAttribute("style", "display: inline-block;");
    submit.setAttribute("style", "display: inline-block;");  
};

// Save and Display Data Function ----------------------------------------------------------

function displayLeaderboard (event) {
    event.stopPropagation()

    var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
    
    var savedDataObject = {
        initials: initials.value,
        score: winCount,
    };

    savedScores.push(savedDataObject);
    console.log(savedScores);
    
    
    localStorage.setItem("savedScores", JSON.stringify(savedScores));

    savedScores.forEach(element => {
        liEl = document.createElement("li");
        liEl.textContent = "Initials: " + element.initials + "   ||   Score: " + element.score;
        leaderboard.appendChild(liEl);
    });


    // Create li Elements
    var scoreListItem = document.createElement("li");
    scoreListItem.textContent = "Initials: " + initials.value + "   ||   Score: " + winCount;
    leaderboard.appendChild(scoreListItem);
    // Show Elements
    reset.setAttribute("style", "display: inline-block;")
    leaderboard.setAttribute("style", "display: inline-block; padding: 1rem;")
    leaderboardSection.setAttribute("style", "display: inline-block;")
    scoreListItem.setAttribute("style", "display: inline-block;");
    // Hide Elements
    initials.setAttribute("style", "display: none;");
    submitScoreBox.setAttribute("style", "display: none;");
    submit.setAttribute("style", "display: none;");
    
};   

//  Page Reload --------------------------------------------------------------------

function resetFunction () {    
    location.reload();
};

//  Questions Array -------------------------------------------------------------------------

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

// Answers Array --------------------------------------------------------------------------

var answers = ["Object", "if () {};", "||", "set"]

