// Global variables
const goButton = document.querySelector(".go");
const title = document.querySelector(".title");
const intro = document.querySelector(".intro");
const timer = document.querySelector(".timer");
const questionsAll = document.querySelector(".question");
const question1 = document.querySelector("#q1");
const question2 = document.querySelector("#q2");
const question3 = document.querySelector("#q3");
const question4 = document.querySelector("#q4");
const question5 = document.querySelector("#q5");
let secondsLeft = 60;

// Process of working through questions
goButton.addEventListener("click", function () {
    quizStart();
    askQuestionOne();
});

// Right now I have this so that it only advances you if you click on the correct button. That's not what I want. I should be able to use the click event delegation (if it's an img, like the exercise from Monday) to make a single formula that moves the quiz forward so long as they click on a button in that html section.
document.querySelector("#correct1").addEventListener("click", function(){
    askQuestionTwo();
});



// Functions
function quizStart() {
        title.textContent = "";
        intro.textContent = "";
        goButton.style.display = "none";

        let countdown = setInterval(function () {
            secondsLeft--;
            timer.textContent = `Timer: ${secondsLeft}`

            if (secondsLeft === 0) {
                gameOver();
                clearInterval(countdown);
            }
        }, 1000);
    };


    // Is there a way to combine these into a single function with a loop?
function askQuestionOne() {
    question1.setAttribute("class", "visible"); 
};
function askQuestionTwo() {
    questionsAll.setAttribute("class", "question"); 
    question2.setAttribute("class", "visible"); 
};
function askQuestionThree() {
    questionsAll.setAttribute("class", "question"); 
    question3.setAttribute("class", "visible"); 
};
function askQuestionFour() {
    questionsAll.setAttribute("class", "question"); 
    question4.setAttribute("class", "visible"); 
};
function askQuestionFive() {
    questionsAll.setAttribute("class", "question"); 
    question5.setAttribute("class", "visible"); 
};



function gameOver() {
    questionsAll.textContent = "";
    title.textContent = "Time's up!";

};



// When a question is answered correctly, move to next question
// When a question is answered correctly: show "Correct!" on page below next question based on answer

// When a question is answered incorrectly, move to next question
// When a question is answered incorrectly: show "Wrong!" on page below next question based on answer
// When a question is answered incorrectly: remove time from clock

// When time runs out, the game ends
// When all questions are answered, the game ends

// When the game ends, input your initials
// When the game ends, record the users' score and associate it via object with their intials
// When initials and score are inputted, also save to local storage

// When high score button is clicked, display high scores from local storage