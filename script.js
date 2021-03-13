var startTimer = document.getElementById("startTimer");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var answerButtons = document.querySelectorAll(".answer");

var timeRemaining = 60;
// var winCount = 0;
var questionCount = 0;

startTimer.addEventListener("click", timer);
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);



function timer() {
    displayQuestion();
    var timerInterval = setInterval(function(){
    startTimer.value = `${timeRemaining} seconds left.`;
    timeRemaining--;
    startTimer.setAttribute("style", "font-size: 1.75rem; color: var(--oxford-blue); background-color: var(--light-cornflower-blue); box-shadow: none; border: none;")

    if (timeRemaining === -1) {
        clearInterval(timerInterval);
        startTimer.value = "Times up!"
        return
    }
    }, 1000);

};

function displayQuestion() {
    
    if (questionCount === 4) {
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
    var winCount = 0;
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

function endGame () {

};

console.log(answer1.value);

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

console.log(questions[0].question);
console.log(timeRemaining);
