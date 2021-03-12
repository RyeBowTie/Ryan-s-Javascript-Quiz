var startTimer = document.getElementById("startTimer");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var answerButtons = document.querySelectorAll(".answer");
var timeRemaining = 60;
var WinCount = 0;
startTimer.addEventListener("click", timer);


var questionOne = ["First Question", "First answer", "second Answer", "Third answer", "Forth Answer"];

function timer() {
    displayQuestionOne();
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

function displayQuestionOne() {
    question.textContent = questionOne[0];
    answer1.value = questionOne[1]
    answer2.value = questionOne[2]
    answer3.value = questionOne[3]
    answer4.value = questionOne[4]
    checkAnswer();
};

function checkAnswer() {
    if (answerButtons.value === questionOne[2]) {
        WinCount++
    } else {
        timeRemaining - 10;
    }
    
};

console.log(WinCount);