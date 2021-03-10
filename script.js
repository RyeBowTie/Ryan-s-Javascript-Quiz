var startTimer = document.getElementById("startTimer");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");


var timeRemaining = 5;

startTimer.addEventListener("click", timer);


questions = [
            {   question1:"Question 1",
                answer11: "answer 1.1",
                answer21: "answer 2.1",
                answer31: "answer 3.1",
                answer41: "answer 4.1",
                // CorrectAnswer1: answer21,
            },
            {   question2: "Question 2",
                answer12: "answer 1.2",
                answer22: "answer 2.2",
                answer32: "answer 3.2",
                answer42: "answer 4.2",
                // CorrectAnswer2: answer12,
            },
            {   question3: "Question 3",
                answer13: "answer 1.3",
                answer23: "answer 2.3",
                answer33: "answer 3.3",
                answer43: "answer 4.3",
                // CorrectAnswer2: answer33,
            },
            {   question4: "Question 4",
                answer14: "answer 1.4",
                answer24: "answer 2.4",
                answer34: "answer 3.4",
                answer44: "answer 4.4",
                // CorrectAnswer2: answer14,
            },
        ]

console.log(questions);

function timer() {
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