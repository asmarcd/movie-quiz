// Questions:
const trivia = [
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
        a2: "A Microwave",
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
];

// Global Variables:
let title = $('#title');
let goBtn = $('#goBtn');
let text = $('#text');
let timer = $('#timer');
let qBox = $('#question-box');
let question = $('#question');
let ansButton = $('.ansButton')
let ans1 = $('#a1');
let ans2 = $('#a2');
let ans3 = $('#a3');
let ans4 = $('#a4');
let userABC = $('#userABC-box');
let submitBtn = $('#submit');

let triviaIndex = 0;
let points = 0;
let secondsLeft = 60;

// Starting game after pressing go
goBtn.click(function () {
    title.text("");
    text.text('');
    goBtn.css("display", "none");

    let countdown = setInterval(function () {
        secondsLeft--;
        timer.text(`Timer: ${secondsLeft}`);

        if (secondsLeft === 0) {
            endGame();
            clearInterval(countdown);
        };

        if (triviaIndex === trivia.length) {
            clearInterval(countdown);
        };

    }, 100);

    qBox.css("display", "block");
    question.text(trivia[triviaIndex].question);
    ans1.text(trivia[triviaIndex].a1)
    ans2.text(trivia[triviaIndex].a2)
    ans3.text(trivia[triviaIndex].a3)
    ans4.text(trivia[triviaIndex].a4)
});

ansButton.click(() => {
    nextQuestion();
});

submitBtn.click(() => {
    userABC.css("display", "none");
});






// Functions:
function nextQuestion() {
    triviaIndex++

    if (triviaIndex === trivia.length) {
        endGame();
    };

    question.text(trivia[triviaIndex].question);
    ans1.text(trivia[triviaIndex].a1);
    ans2.text(trivia[triviaIndex].a2);
    ans3.text(trivia[triviaIndex].a3);
    ans4.text(trivia[triviaIndex].a4);
};

function endGame() {
    qBox.css("display", "none");
    userABC.css("display", "block");
    title.text(`You earned ${points} points!`);
}

// Pick up tomorrow - figure out how to make questions get designated as correct or incorrect. Figure out how to make a box pop up accordingly. Do that and you'll basically be there.

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