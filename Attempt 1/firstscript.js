// Global variables
const go = $("#go");
const goButton = $(".goButton")
const title = $(".title");
const intro = $(".intro");
const timer = $(".timer");
// const questionsAll = document.querySelectorAll(".question");
// const question1 = document.querySelector("#q1");
// const question2 = document.querySelector("#q2");
// const question3 = document.querySelector("#q3");
// const question4 = document.querySelector("#q4");
// const question5 = document.querySelector("#q5");


// When you want to replace the HTML questions with an array, do it by finishing this. each questions will be myQuestions[i] when you're trying to pull them later:
const myQuestions = [
    {
        question: "Which now famous director made their acting debut in 1999's 'Mystery Men' with the line, 'Can we bring the brewskies?'",
        a1: "Joss Whedon",
        a2: "Michael Bay",
        a3: "Patty Jenkins",
        a4: "Brett 'The Rat' Ratner"
    },
    {
        question: "In 'The Sandlot, the team faces off against a huge dog that they call The Beast. What's The Beast's real name?",
        a1: "Hercules",
        a2: "Zeus",
        a3: "Babe",
        a4: "Cujo",
    },
    {
        question: "Who was the only actor to receive an Oscar nomination for acting in a Lord of the Rings movie?",
        a1: "Viggo Mortensen",
        a2: "Elijah Wood",
        a3: "Sean Bean",
        a4: "Ian McKellen",
    },
    {
        question: "In When Harry Met Sally, which household item do the titular characters’ friends have an argument about?",
        a1: "A Lamp",
        a2: "An Microwave",
        a3: "A Coffee Table",
        a4: "A Loveseat",
    },
    {
        question: "In which blockbuster starring Nic Cage and John Travolta do the two main characters take each others faces...off?",
        a1: "Face/Off",
        a2: "Con Air",
        a3: "The Rock",
        a4: "Saturday Night Fever",
    },
]

// New process of working through questions:

go.click(function(){
    let secondsLeft = 60;
    
});


// -----
// Process of working through questions
// goButton.addEventListener("click", function () {
    // quizStart();
    // askQuestionOne();
// });

// question1.addEventListener("click", function (event) {
//     if (event.target.matches(".q1a")) {
//         askQuestionTwo();
//     }
// });
// question2.addEventListener("click", function (event) {
//     if (event.target.matches(".q2a")) {
//         askQuestionThree();
//     }
// });
// question3.addEventListener("click", function (event) {
//     if (event.target.matches(".q3a")) {
//         askQuestionFour();
//     }
// });
// question4.addEventListener("click", function (event) {
//     if (event.target.matches(".q4a")) {
//         askQuestionFive();
//     }
// });
// question5.addEventListener("click", function (event) {
//     if (event.target.matches(".q5a")) {
//         // insert function for moving to end screen, but without time's up message
//     }
// });

// // Functions
// function quizStart() {
//     title.text("");
//     intro.text("");
//     goButton.css("display", "none");

//     let countdown = setInterval(function () {
//         secondsLeft--;
//         timer.textContent = `Timer: ${secondsLeft}`

//         if (secondsLeft === 0) {
//             // gameOver();
//             clearInterval(countdown);
//         }
//     }, 1000);
// };


// Is there a way to combine these into a single function with a loop?
// function askQuestionOne() {
//     question1.setAttribute("class", "visible");
// };
// function askQuestionTwo() {
//     question1.setAttribute("class", "question");
//     question2.setAttribute("class", "visible");
// };
// function askQuestionThree() {
//     question2.setAttribute("class", "question");
//     question3.setAttribute("class", "visible");
// };
// function askQuestionFour() {
//     question3.setAttribute("class", "question");
//     question4.setAttribute("class", "visible");
// };
// function askQuestionFive() {
//     question4.setAttribute("class", "question");
//     question5.setAttribute("class", "visible");
// };



// function gameOver() {
//     questionsAll.textContent = "";
//     title.textContent = "Time's up!";

// };



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