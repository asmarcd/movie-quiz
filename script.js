// Questions:
const trivia = [
    {
        question: "Which now famous director made their acting debut in 1999's 'Mystery Men' with the line, 'Can we bring the brewskies?'",
        a1: "Joss Whedon",
        a2: "Michael Bay",
        a3: "Patty Jenkins",
        a4: "Brett 'The Rat' Ratner",
        correctAns: "a2"
    },
    {
        question: "In 'The Sandlot, the team faces off against a huge dog that they call The Beast. What's The Beast's real name?",
        a1: "Hercules",
        a2: "Zeus",
        a3: "Babe",
        a4: "Cujo",
        correctAns: "a1"
    },
    {
        question: "Who was the only actor to receive an Oscar nomination for acting in a Lord of the Rings movie?",
        a1: "Viggo Mortensen",
        a2: "Elijah Wood",
        a3: "Sean Bean",
        a4: "Ian McKellen",
        correctAns: "a4"
    },
    {
        question: "In When Harry Met Sally, which household item do the titular characters’ friends have an argument about?",
        a1: "A Lamp",
        a2: "A Microwave",
        a3: "A Coffee Table",
        a4: "A Loveseat",
        correctAns: "a3"
    },
    {
        question: "In which blockbuster starring Nic Cage and John Travolta do the two main characters take each others' faces...off?",
        a1: "Face/Off",
        a2: "Con Air",
        a3: "The Rock",
        a4: "Saturday Night Fever",
        correctAns: "a1"
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
let userABCBox = $('#userABC-box');
let submitBtn = $('#submit');
let answerPopUp = $('#answer-popup');
let scoresBox = $('#scores-box');
let scoreDisplay = $("#score-display");
let hsBtn = $('#hsLink')

let triviaIndex = 0;
let points = 0;
let secondsLeft = 30;
let initials = "";

let playerScores = [];
let player = {
    initials: initials,
    score: points
};

// -------------------------------------------------
// Starting game after pressing go
goBtn.click(function () {
    title.text("");
    text.text('');
    goBtn.css("display", "none");

    let countdown = setInterval(function () {
        secondsLeft--;
        timer.text(`Timer: ${secondsLeft}`);

        if (secondsLeft <= 0) {
            endGame();
            clearInterval(countdown);
            timer.text(`Timer: 0`);
        };

        if (triviaIndex === trivia.length) {
            clearInterval(countdown);
        };

    }, 1000);

    qBox.css("display", "block");
    question.text(trivia[triviaIndex].question);
    ans1.text(trivia[triviaIndex].a1)
    ans2.text(trivia[triviaIndex].a2)
    ans3.text(trivia[triviaIndex].a3)
    ans4.text(trivia[triviaIndex].a4)
});

// Progressing the game as you click through
ansButton.click(function (event) {
    if (event.target.id == trivia[triviaIndex].correctAns) {
        points += 5;
        answerPopUp.html("<h2>Correct!</h2>");
        answerPopUp.css("display", "block");
    } else {
        secondsLeft -= 10;
        answerPopUp.html("<h2>Wrong :(</h2>");
        answerPopUp.css("display", "block");
    };
    hideAnswer();
    nextQuestion();
});

submitBtn.click(function (event) {
    event.preventDefault();
    userABCBox.css("display", "none");
    player.initials = $('#userABC').val();
    player.score = points;

    playerScores.push(player);
    localStorage.setItem("Player Score", JSON.stringify(playerScores));

    scoreSave();
});

hsBtn.click(function (event){
    qBox.css("display", "none");
    answerPopUp.css("display", "none");
    userABCBox.css("display", "none");
    goBtn.css("display", "none");
    scoresBox.css("display", "block");
    title.text("");
    text.text('');
})

// -------------------------------------------------
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
    answerPopUp.css("display", "none");
    userABCBox.css("display", "block");
    title.text(`You earned ${points} points!`);
    scoresBox.css("display", "block");

};

function hideAnswer() {
    setTimeout(function () {
        answerPopUp.css("display", "none");
    }, 500)
};

let localStorageData = JSON.parse(localStorage.getItem("Player Score"));

function scoreSave() {

    const divScores = $('<div></div>');
    scoreDisplay.append(divScores);

    localStorageData.forEach(function (player) {
        let pTag = $("<p></p>");
        pTag.text(`${player.initials} - ${player.score}`);
        divScores.prepend(pTag);
    })
};

function loadLocalStorage() {
    playerScores.push(localStorageData);
};

if (localStorageData != null) {
    loadLocalStorage();
};

// When the game ends, record the users' score and associate it via object with their intials

// When initials and score are inputted, also save to local storage

// When high score button is clicked, display high scores from local storage

// log local storage on load both parsed and unparsed.

// comment out platerscores.push and see how things change.
// log in foreach loop, the localstorage
// step through each function, log each step, and see at what point the data values start to dupe.