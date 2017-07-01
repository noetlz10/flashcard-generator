//Require the "inquirer" package npm install inquirer
var inquirer = require ("inquirer");

//import the flash cards constructor implementations
var flashCards = require ("./basicCard.js");
//import full list of questions
var questions = require ("./questions.js").questions;

//variable that holds the cloze-deleted questions list
var closeQuestions = [];

//populate the cloze-deleted questions list
for (var i = 0; i < questions.length; i++) {
    var q = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
    closeQuestions.push(q);

}

//what question is user currently on
var currentQuestion = 0;
//How many questions the user has gotten right
var rightAnswer = 0;
//Hoe man questions the user has gotten wrong
var wrongAnswer = 0;

//askQuestion prompts user to answer a give cloze-deleted question
function askQuestion(){
    inquirer.prompt ([
        {
        
        type: "input",
        message: closeQuestions[currentQuestion].partial + "\nAnswer: ",
        name: "userGuess"

        }

    ]).then(function (answers){
        console.log("\n");

        //check if user has guessed correctly
        if(answers.userGuess.toLowerCase() === closeQuestions[currentQuestion].cloze.toLowerCase()) {
            console.log("Correct!");
            rightAnswer++;  
        }
        else {
            console.log("Incorrect!");
            wrongAnswer++;
        }

        //Show the correct Answer
        console.log(closeQuestions[currentQuestion].full);
        console.log("---------------------------------\n");

        //move onto next question
        if (currentQuestion < closeQuestions.length - 1) {
            currentQuestion++;
            askQuestion();
        }
        else {
            console.log("Game Over!");
            console.log("Correct Answers: " + rightAnswer);
            console.log("Incorrect Answers: " + wrongAnswer);

            console.log("-------------------------------------\n");

            //promt user to play again
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "would you like play again?",
                    name: "playAgain"
                }

            ]).then(function (answers){
                if (answers.playAgain) {
                    //reset the game
                    currentQuestion = 0;
                    rightAnswer = 0;
                    wrongAnswer = 0;

                    //begin asking teh questions!
                    askQuestion();
                }
                else {
                    //exit the game
                    console.log("thanks for playing! see you next time!");
                }
            })
        }
    })
}

//begin asking questions
askQuestion();