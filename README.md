# Quiz_Game

This is an appliaiton built to test your Javascript knowledge.

When the main page loads, you will be presented with two buttons, one to begin the game (Start Quiz) and another view high scores (High Scores) that are stored in local storage.

If the user clicks the Start Quiz, they are taken to a new page that loads the quiz questions and begins the quiz countdown timer. The timer begins at 60 seconds to answer the 5 questions. Points are awarded for a correct answer based on how much time is remaining on the timer (10 points for every second remaining on the timer). If the question is answered incorrectly, 15 seconds are subtracted from the timer.

Upon completion of all the questions or if the timer runs out prior to completing the quiz, the user is taken to the end screen where the score is displayed and the user can enter a name to save the score in local storage. Only the top 5 scores will be stored. Also on the end screen the user has the option to play again (automatically starts a new quiz) without saving the high score or return to the home screen.

If the user clicks the high score button on the home screen, they are taken to the high score page where they can view the top 5 high scores and an option to remove all high scores. 