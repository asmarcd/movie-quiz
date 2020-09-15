// Global variables
const goButton = document.querySelector(".go")
const title = document.querySelector(".title")
const intro = document.querySelector(".intro")
const timer = document.querySelector(".timer")
const questions = document.querySelector(".questions")
let secondsLeft = 60

// Process of working through questions
goButton.addEventListener("click", function () {
    quizStart();
})

// When time runs out:
// if (secondsLeft === 0) {
//     questions.textContent = "woo!";
//     title.textcontent = "Time's up!";
// }

// Functions
function quizStart() {
    if (secondsLeft > 0) {
        title.textContent = "";
        intro.textContent = "";
        goButton.style.display = "none";
    }
    let countdown = setInterval(function () {
        secondsLeft--;
        timer.textContent = `Timer: ${secondsLeft}`

        if (secondsLeft === 0) {
            questions.textContent = "";
            title.textContent = "Time's up!";
            clearInterval(countdown);
        }
    }, 1000);
};






// When start button is clicked: first question comes up

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