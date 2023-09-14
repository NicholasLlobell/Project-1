let start

let game = null
const startScreen = document.getElementById("startScreen")
const controlBtns = document.querySelector("#controlBtns")

startScreen.children[0].onclick = function () {
    game = new Game()
    game.startGame(game)
    startScreen.style.display = "none"
    controlBtns.style.display = "flex"
};

// function animateGame() {
//         setInterval (function(){
//         fieldctx.clearRect(0, 0, 1275, 735);
//         currentGame.keeper.drawKeeper();
//         currentGame.ball.drawBall();
//       }, 50)
//     }


class Game {
    constructor() {
        this.board = document.querySelector("#board")
        this.width = 2500
        this.height = 1700
        this.board.style.width = `${this.width}px`
        this.board.style.height = `${this.height}px`
        this.keeper = null
        this.ball = null
        this.round = 0;
        this.score = 0
        this.attempts = 0
    }
    startGame(game) {
        this.keeper = new Keeper(game.board, game); //pass in game as well
        this.ball = new Ball(game.board, this.keeper, game);
    }

    moveKeeper(move) {
        if (move === 0) {
            console.log("moving topLeft")
        }
        if (move === 1) {
            console.log("moving topRight")
        }
        if (move === 2) {
            console.log("moving bottomLeft")
        }
        if (move === 3) {
            console.log("moving bottomRight")
        }

    }
}


// randomize keeper dive position
function getRandomInt() {
    let numArray = [1, 2, 3, 4];
    return numArray[Math.floor(Math.random() * numArray.length)];
}

class Keeper {
    constructor(board, game) {
        this.x = 1010;
        this.y = 200;
        this.width = 500;
        this.height = 485;
        this.score = game.score
        this.attempts = game.attempts
        this.element = document.createElement("div")
        this.element.style.backgroundImage = "url(./images/centerCenter.png)"
        this.element.style.backgroundRepeat = "no-repeat"
        this.element.style.backgroundPosition = "center"
        this.element.style.backgroundSize = "contain"
        this.element.style.position = 'absolute'
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.id = "keeper";
        this.keeperMoves = []
        this.generateMoves();
        board.appendChild(this.element)

    };

    generateMoves() {
        this.keeperMoves.push(
            Math.floor(Math.random() * 4));
        if (this.keeperMoves.length < 5) {
            this.generateMoves()
        }

    }

    updatePosition() {
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`

    }

    updateScore() {
        let score = document.getElementById('score')
        score.innerHTML = `${this.score}`
        let attempts = document.getElementById('attempts')
        attempts.innerHTML = `${this.attempts}`
    }

    checkGameOver() {
        if (this.attempts >= 5) {
            let parent = document.getElementById('board')
            let gameOverScreen = document.createElement('div')
            gameOverScreen.setAttribute('id', 'game-over')
            gameOverScreen.style.marginLeft = '50%'
            gameOverScreen.style.marginTop = '50%'
            let resetButton = document.createElement('button')
            resetButton.innerHTML = 'Restart Game'
            resetButton.addEventListener('click', () => {
                this.restartGame()
            })

            if (this.score >= 3) {
                gameOverScreen.innerHTML = `
            <h2>You scored ${this.score} out of ${this.attempts}.</h2>
            <h1>You won the penalty shootout!</h1>
            `
            } else {
                gameOverScreen.innerHTML = `
            <h2>You scored ${this.score} out of ${this.attempts}.</h2>
            <h1>You lost!</h1>
            `
            }
            setTimeout(() => {

                parent.appendChild(gameOverScreen)
                gameOverScreen.appendChild(resetButton)
            }, 500)
        }
    }

    restartGame() {
        console.log("RESTARTING")
        this.score = 0
        this.attempts = 0
        let parent = document.getElementById('board')
        let gameOverScreen = document.getElementById('game-over')
        parent.removeChild(gameOverScreen)
        this.updateScore()
    }

    dive(keyPressed) {



        let diveSelection = getRandomInt()


        switch (keyPressed) {
            case 65: /////////////top left 
                if (diveSelection === 1) {
                    start = setInterval(() => this.topLeft(), 10);
                    setTimeout(() => {
                        this.attempts++
                        //this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // scoresArr.push("save");
                }
                if (diveSelection === 2) {
                    start = setInterval(() => this.topRight(), 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 3) {
                    start = setInterval(() => this.bottomLeft(), 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 4) {
                    start = setInterval(() => this.bottomRight(), 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                break;

            case 83: ////////////top right
                if (diveSelection === 1) {
                    start = setInterval(() => this.topLeft(), 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 2) {
                    start = setInterval(() => this.topRight(), 10);
                    setTimeout(() => {
                        this.attempts++
                        // this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // scoresArr.push("save");
                }
                if (diveSelection === 3) {
                    start = setInterval(() => this.bottomLeft(), 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 4) {
                    start = setInterval(() => this.bottomRight(), 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                break;

            case 90: //////////////bottom left
                if (diveSelection === 1) {
                    start = setInterval(() => this.topLeft(), 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 2) {
                    start = setInterval(() => this.topRight(), 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 3) {
                    start = setInterval(() => this.bottomLeft(), 10);
                    setTimeout(() => {
                        this.attempts++
                        // this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // scoresArr.push("save");
                }
                if (diveSelection === 4) {
                    start = setInterval(() => this.bottomRight(), 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                break;

            case 88: ////////////////////bottom right 
                if (diveSelection === 1) {
                    start = setInterval(() => {
                        this.topLeft()
                    }, 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 2) {
                    start = setInterval(() => {
                        this.topRight()
                    }, 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 3) {
                    start = setInterval(() => {
                        this.bottomLeft()
                    }, 10);
                    setTimeout(() => {
                        this.attempts++
                        this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 4) {
                    start = setInterval(() => {
                        this.bottomRight()
                    }, 10);
                    setTimeout(() => {
                        this.attempts++
                        // this.score++
                        this.updateScore()
                        this.checkGameOver()
                    }, 1000)
                    // attempt++;
                    // scoresArr.push("save");
                }
                break;
            default:
        }



    }

    topLeft() {

        this.element.style.backgroundImage = "url(./images/topLeft.png)"
        console.log('topLeft')
        //if this condition evaluyates to true, the keeper moves
        if (this.x >= 300) {
            this.x -= 5;
            // this.y -= 3;
            this.updatePosition()
        }
        // if (this.x !== 185) {
        //     this.x -= 5;
        //     this.updatePosition()
        // }
        // if (this.y !== 250) {
        //     this.y -= 1;
        //     this.updatePosition()
        // }
        else {
            clearInterval(start);
            console.log("Resetting topLeft")
            this.x = 1010;
            this.y = 200;
            this.element.style.backgroundImage = "url(./images/centerCenter.png)"
            this.updatePosition();
        }
    }




    topRight() {
        console.log('topRight')

        this.element.style.backgroundImage = "url(./images/topRight.png)"
        if (this.x <= 2000) {
            this.x += 5;
            // this.y -= 5;
            this.updatePosition()
        }
        // if (this.x !== 1000) {
        //     this.x += 5;
        //     this.updatePosition()
        // }
        // if (this.y !== 250) {
        //     this.y -= 5;
        //     this.updatePosition()
        // }
        else {
            clearInterval(start);
            this.x = 1010;
            this.y = 200;
            this.element.style.backgroundImage = "url(./images/centerCenter.png)"
            this.updatePosition();
        }
    }


    bottomLeft() {
        console.log('bottomleft')

        this.element.style.backgroundImage = "url(./images/bottomLeft.png)"
        if (this.x >= 300) {
            this.x -= 5;
            // this.y -= 3;
            this.updatePosition()
        }
        // if (this.x !== 185) {
        //     this.x -= 5;
        //     this.updatePosition()
        // }
        // if (this.y !== 500) {
        //     this.y += 1;
        //     this.updatePosition()
        // }
        else {
            clearInterval(start);
            console.log("Resetting bottomLeft")
            this.x = 1010;
            this.y = 200;
            this.element.style.backgroundImage = "url(./images/centerCenter.png)"
            this.updatePosition();
        }
    }

    bottomRight() {
        console.log('bottomright')

        this.element.style.backgroundImage = "url(./images/bottomRight.png)"
        if (this.x <= 2000) {
            this.x += 5;

            console.log("X Position =====>", this.x)
            // this.y += 3;
            this.updatePosition()
        }
        // if (this.x !== 700) {
        //     this.x += 5;
        //     this.updatePosition()
        // }
        // if (this.y !== 500) {
        //     this.y += 3;
        //     this.updatePosition()
        // }
        else {
            clearInterval(start);

            this.x = 1010;
            this.y = 200;
            this.element.style.backgroundImage = "url(./images/centerCenter.png)"
            this.updatePosition();
        }
    }




}




////////////// end game or continue to next turn
// function endGame() {
//     if (scoresArr.length === 5 && score >= 3) {
//       win.play();
//       setTimeout(function () {
//         swal({
//           title: "CAMPEON DEL MUNDO",
//           text: "Click below to play again",
//           confirmButtonText: "PLAY AGAIN",
//           confirmButtonColor: "#ffffff",
//       }, function() {
//           window.location = "index.html";
//       });
//       }, 1100)
//     } else if (scoresArr.length === 5 && score < 3) {
//       lose.play();
//       setTimeout(function () {
//         swal({
//           title: "A PRACTICAR",
//           text: "Click below to play again",
//           confirmButtonText: "PLAY AGAIN",
//           confirmButtonColor: "#ffffff",
//       }, function() {
//           window.location = "index.html";
//       });
//       }, 1100)
//       // setTimeout(function () {
//       //   location.reload();
//       // },2001)
//       } else {
//      setTimeout(function() {
//      let Ball = new Ball();
//      currentGame.ball = Ball;
//      let Keeper = Keeper();
//      currentGame.keeper = Keeper;
//      //image?
//   }, 2200)
//     }


//   updateScore();
//   endGame();
