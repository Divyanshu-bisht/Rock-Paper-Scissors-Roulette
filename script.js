const button = document.querySelectorAll(".btn");
const message = document.querySelector("#message");
const playerChoose = document.querySelector("#playerChoice");
const computerChoose = document.querySelector("#computerChoice");
const result = document.querySelector("#results");
const spinbtn = document.querySelector("#spinbtn");
const rouletteMessage = document.querySelector("#rouletteMessage");
const roulette = document.querySelector("#roulette");
const playbtn = document.querySelector("#playbtn");
const gameContainer = document.querySelector("#gameContainer");
const backgroundimg = document.querySelector("#backgroundimg");
const rockMove = document.querySelector("#rockMove");
const paperMove = document.querySelector("#paperMove");
const scissorsMove = document.querySelector("#scissorsMove");
const playerBang = document.querySelector("#playerBang");
const computerBang = document.querySelector("#computerBang");
const playerEmpty = document.querySelector("#playerEmpty");
const computerEmpty = document.querySelector("#computerEmpty");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const genChoice = () => {
    const random = Math.floor(Math.random() * 2);
    return random;
};

const showMove = (compChoice) => {
    if (compChoice === "rock") {
        setTimeout(function () {
            rockMove.classList.remove("hide");
            rockMove.play();
            gameContainer.classList.add("hide");
        }, 0);

        setTimeout(function () {
            rockMove.classList.add("hide");
            rockMove.pause();
            gameContainer.classList.remove("hide");
        }, 5000);
    }

    if (compChoice === "paper") {
        setTimeout(function () {
            paperMove.classList.remove("hide");
            paperMove.play();
            gameContainer.classList.add("hide");
        }, 0);

        setTimeout(function () {
            paperMove.classList.add("hide");
            paperMove.pause();
            gameContainer.classList.remove("hide");
        }, 5000);
    }

    if (compChoice === "scissors") {
        setTimeout(function () {
            scissorsMove.classList.remove("hide");
            scissorsMove.play();
            gameContainer.classList.add("hide");
        }, 0);

        setTimeout(function () {
            scissorsMove.classList.add("hide");
            scissorsMove.pause();
            gameContainer.classList.remove("hide");
        }, 5000);
    }
};

const drawGame = (userChoice, compChoice) => {
    result.classList.remove("hide");
    message.style.color = "white";
    message.innerText = `Game was Draw. Play again.`;
    playerChoose.innerText = `You choose: ${userChoice}`;
    computerChoose.innerText = `Computer choose ${compChoice}`;
};

const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {
        result.classList.remove("hide");
        message.innerText = `You Won. Computer is spinning the barrel.`;
        message.style.color = "white";
        playerChoose.innerText = `You choose: ${userChoice}`;
        computerChoose.innerText = `Computer choose ${compChoice}`;
        disableButtons();

        random2 = genChoice();
        if (random2 === 0) {
            setTimeout(function () {
                computerEmpty.classList.remove("hide");
                computerEmpty.play();
                gameContainer.classList.add("hide");
            }, 4000);

            setTimeout(function () {
                computerEmpty.classList.add("hide");
                computerEmpty.pause();
                gameContainer.classList.remove("hide");
            }, 9000);
            enableButtons();

            setTimeout(function () {
                result.classList.remove("hide");
                rouletteMessage.classList.remove("hide");
                rouletteMessage.innerText = `Computer survived. Happiness gone.`;
                rouletteMessage.style.color = "white";
            }, 9000);
            setTimeout(function () {
                result.classList.add("hide");
                rouletteMessage.classList.add("hide");
            }, 11000);
            reset();

        }

        else {
            setTimeout(function () {
                computerBang.classList.remove("hide");
                computerBang.play();
                gameContainer.classList.add("hide");
            }, 4000);

            setTimeout(function () {
                computerBang.classList.add("hide");
                computerBang.pause();
                gameContainer.classList.remove("hide");
            }, 9000);
            enableButtons();

            setTimeout(function () {
                result.classList.remove("hide");
                rouletteMessage.classList.remove("hide");
                rouletteMessage.innerText = `Computer got shot. ******.`;
                rouletteMessage.style.color = "red";
            }, 9000);
            setTimeout(function () {
                result.classList.add("hide");
                rouletteMessage.classList.add("hide");
            }, 11000);
            reset();
        }

    } else {
        result.classList.remove("hide");
        message.innerText = `You lose. Spin the barrel.`;
        message.style.color = "red";
        playerChoose.innerText = `You choose: ${userChoice}`;
        computerChoose.innerText = `Computer choose ${compChoice}`;
        disableButtons();
        spinbtn.classList.remove("hide");
    }

};

const disableButtons = () => {
    for (let btn of button) {
        btn.disabled = true;
    }
};

const enableButtons = () => {
    for (let btn of button) {
        btn.disabled = false;
    }
};

const reset = () => {
    result.classList.add("hide");
    enableButtons();
    rouletteMessage.classList.add("hide");
    spinbtn.classList.add("hide");
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    showMove(compChoice);
    if (userChoice === compChoice) {
        setTimeout(function () {
            drawGame(userChoice, compChoice);
        }, 2000);
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        setTimeout(function () {
            showWinner(userWin, userChoice, compChoice);
        }, 2000);
    }
};

spinbtn.addEventListener("click", () => {
    const random = genChoice();
    setTimeout(function () {
        roulette.classList.remove("hide");
        gameContainer.classList.add("hide");
    }, 0);

    setTimeout(function () {
        roulette.classList.add("hide");
    }, 2500);

    setTimeout(function () {

        if (random === 0) {
            setTimeout(function () {
                playerEmpty.classList.remove("hide");
                playerEmpty.play();
                gameContainer.classList.add("hide");
            }, 0);

            setTimeout(function () {
                playerEmpty.classList.add("hide");
                playerEmpty.pause();
                gameContainer.classList.remove("hide");
            }, 4000);

        }
        else {
            setTimeout(function () {
                playerBang.classList.remove("hide");
                playerBang.play();
                gameContainer.classList.add("hide");
            }, 0);

            setTimeout(function () {
                playerBang.classList.add("hide");
                playerBang.pause();
                gameContainer.classList.remove("hide");
            }, 4000);
        }
    }, 2500);

    setTimeout(function () {
        gameContainer.classList.remove("hide");
        rouletteMessage.classList.remove("hide");
        spinbtn.classList.add("hide");


        if (random === 0) {

            rouletteMessage.innerText = `You survived. But at what cost.`;
            rouletteMessage.style.color = "white";
        }
        else {
            rouletteMessage.innerText = `Bang! You are shot. Try again Brave one.`;
            rouletteMessage.style.color = "red";
        }

    }, 6500);

    setTimeout(function () {
        reset();

    }, 9000);

});

playbtn.addEventListener("click", () => {
    gameContainer.classList.remove("hide");
    backgroundimg.classList.add("hide");
});

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        const userChoice = btn.getAttribute("id");
        playGame(userChoice);
    });
});

window.addEventListener("load", () => {
    backgroundimg.classList.remove("hide");
});