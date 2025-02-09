let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userScores = document.querySelector('#user-score');
const computerscores = document.querySelector('#computer-score');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin) => {
    let i = 1;
    let j = 1;
    if(userWin){
        userScore++;
        console.log("You Win!");
        userScores.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        i++;
    }
    else {
        compScore++;
        console.log("You Lose!");
        computerscores.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
};

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw..Play Again";
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);
    if(userChoice === compChoice) {
        //draw game
        drawgame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissor, paper 
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false  : true;
        }
        showWinner(userWin);

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});