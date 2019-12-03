
let questions = [
    {
      question: "Inside which HTML element do we put the JavaScript??",
      choice1: "<script>",
      choice2: "<javascript>",
      choice3: "<js>",
      choice4: "<scripting>",
      answer: 1
    },
    {
      question:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      choice1: "<script href='xxx.js'>",
      choice2: "<script name='xxx.js'>",
      choice3: "<script src='xxx.js'>",
      choice4: "<script file='xxx.js'>",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      choice1: "msgBox('Hello World');",
      choice2: "alertBox('Hello World');",
      choice3: "msg('Hello World');",
      choice4: "alert('Hello World');",
      answer: 4
    },
    {
      question: " Which event occurs when the user clicks on an HTML element?",
      choice1: "onmouseclick",
      choice2: "onclick",
      choice3: "onmouseover",
      choice4: "onchange",
      answer: 2
    },
    {
      question: " What is the correct way to write a JavaScript array?",
      choice1:  "var colors = ['red', 'green', 'blue']",
      choice2: "var colors = (1:'red', 2:'green', 3:'blue')",
      choice3: "var colors = 'red', 'green', 'blue'",
      choice4: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      answer: 1
    }
  ];

  startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
  };
  
  getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      localStorage.setItem("mostRecentScore", score);
      //go to the end page
      return window.location.assign("end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;
  
    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });
  
    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
  };
  
  startGame();