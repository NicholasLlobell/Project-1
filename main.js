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
    }
    startGame(game) {
        this.keeper = new Keeper(game.board);
        this.ball = new Ball(game.board, this.keeper);
    }
}


// randomize keeper dive position
function getRandomInt() {
    let numArray = [1, 2, 3, 4];
    return numArray[Math.floor(Math.random() * numArray.length)];
}

class Keeper {
    constructor(board) {
        this.x = 1010;
        this.y = 200;
        this.width = 500;
        this.height = 485;
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
        board.appendChild(this.element)
    };

    updatePosition() {
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`

    }

    dive(keyPressed) {


        
        let diveSelection = getRandomInt()


        switch (keyPressed) {
            case 65: /////////////top left 
                if (diveSelection === 1) {
                    start = setInterval(this.topLeft, 1);
                    // attempt++;
                    // scoresArr.push("save");
                }
                if (diveSelection === 2) {
                    start = setInterval(this.topRight, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 3) {
                    start = setInterval(this.bottomLeft, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 4) {
                    start = setInterval(this.bottomRight, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                break;

            case 83: ////////////top right
                if (diveSelection === 1) {
                    start = setInterval(this.topLeft, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 2) {
                    start = setInterval(this.topRight, 1);
                    // attempt++;
                    // scoresArr.push("save");
                }
                if (diveSelection === 3) {
                    start = setInterval(this.bottomLeft, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 4) {
                    start = setInterval(this.bottomRight, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                break;

            case 90: //////////////bottom left
                if (diveSelection === 1) {
                    start = setInterval(this.topLeft, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 2) {
                    start = setInterval(this.topRight, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 3) {
                    start = setInterval(this.bottomLeft, 1);
                    // attempt++;
                    // scoresArr.push("save");
                }
                if (diveSelection === 4) {
                    start = setInterval(this.bottomRight, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                break;

            case 88: ////////////////////bottom right
                if (diveSelection === 1) {
                    start = setInterval(this.topLeft, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 2) {
                    start = setInterval(this.topRight, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 3) {
                    start = setInterval(this.bottomLeft, 1);
                    // attempt++;
                    // score++;
                    // scoresArr.push("goal");
                }
                if (diveSelection === 4) {
                    start = setInterval(this.bottomRight, 1);
                    // attempt++;
                    // scoresArr.push("save");
                }
                break;
            default:
        }



    }

    topLeft() {
        let keeper = document.getElementById("keeper")
        keeper.style.backgroundImage = "url(./images/topLeft.png)"


        if (this.x !== 185 && this.y !== 250) {
            this.x -= 5;
            this.y -= 3;
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
            this.x = 590;
            this.y = 410;
            keeper.style.backgroundImage = "url(./images/centerCenter.png)"
            this.updatePosition();
        }
    }




    topRight() {
        let keeper = document.getElementById("keeper")
        keeper.style.backgroundImage = "url(./images/topRight.png)"
        if (this.x !== 1000 && this.y !== 250) {
            this.x += 5;
            this.y -= 5;
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
            this.x = 590;
            this.y = 410;
            keeper.style.backgroundImage = "url(./images/centerCenter.png)"
            this.updatePosition();
        }
    }


    bottomLeft() {
        let keeper = document.getElementById("keeper")
        keeper.style.backgroundImage = "url(./images/bottomLeft.png)"
        if (this.x !== 185 && this.y !== 500) {
            this.x -= 5;
            this.y += 1;
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
            this.x = 590;
            this.y = 410;
            keeper.style.backgroundImage = "url(./images/centerCenter.png)"
            this.updatePosition();
        }
    }

    bottomRight() {
        let keeper = document.getElementById("keeper")
        keeper.style.backgroundImage = "url(./images/bottomRight.png)"
        if (this.x !== 700 && this.y !== 500) {
            this.x += 5;
            this.y += 3;
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
            this.x = 590;
            this.y = 410;
            keeper.style.backgroundImage = "url(./images/centerCenter.png)"
            this.updatePosition();
        }
    }




}


//   updateScore();
//   endGame();
