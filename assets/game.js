const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let secondsLeft = 60;
const timeEl = document.querySelector("#timeRemaining");

function setTime() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      localStorage.setItem("mostRecentScore", score);
      return window.location.assign("end.html");
    }

  }, 1000);
}


//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;


choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    
   
    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS*secondsLeft);
    }

    else if (classToApply === "incorrect"){
      secondsLeft = (secondsLeft-15);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

setTime();

