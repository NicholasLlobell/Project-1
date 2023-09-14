// Shoot ball
/////////////////accelerate x/y
class Ball {
    constructor(board, keeper, game) {
      this.x = 1150     
      this.y = 1280;     
      this.width = 200;  
      this.height = 200; 
      this.ballInterval = null
      this.controlBtns = document.querySelectorAll("#controlBtns .control")
      this.element = document.createElement("div")
      this.element.style.backgroundImage = "url('./images/ball.png')"
      this.element.style.backgroundRepeat = "no-repeat"
      this.element.style.backgroundPosition = "center"
      this.element.style.backgroundSize = "contain"
      this.element.style.position = 'absolute'
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.x}px`;
      this.element.style.top = `${this.y}px`;
      this.board = board
      this.keeper = keeper
      this.game = game
      this.board.appendChild(this.element)
      this.controlBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
              this.controlBtns.forEach((btn) => btn.disabled = 'true')
              setTimeout(() => {
              this.controlBtns.forEach((btn) => btn.disabled = false)
              this.x = 1150     
              this.y = 1280;     
                this.updatePosition()
              }, 4000)
              this.game.round++;
              this.game.moveKeeper(this.keeper.keeperMoves[this.game.round])

             
             switch(e.target.id){
                 case "top-right": this.ballInterval = setInterval(() => {
                     this.topRight()
                    }, 10)
                    this.keeper.dive(83)
                 break;
                 case "top-left": this.ballInterval = setInterval(() => this.topLeft(), 10)
                  this.keeper.dive(65)
                 break;
                 case "bottom-right": this.ballInterval = setInterval(() => this.bottomRight(), 10);
                 this.keeper.dive(88);
                 break;
                 case "bottom-left": this.ballInterval = setInterval(() => this.bottomLeft(), 10);
                 this.keeper.dive(90);
                 break;
                 default: return

                 
             }

          })
      })
    
    }

    updatePosition(){
        
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
    }


//top left-65 top right-83 bottom left-90 bottom right-88

     topLeft() {
        //  this.keeper.dive(65)
        if(this.y <= 430) {
            clearInterval(this.ballInterval)
            this.ballInterval = null
        }
       
        this.x -= 5;
        this.y -= 5;
     
      this.updatePosition()
    }

     topRight() {
        // this.keeper.dive(83)
       
        if(this.y <= 570) {
            clearInterval(this.ballInterval)
            this.ballInterval = null
        }

     
        this.x += 5;
        this.y -= 5;
      
   
     
      this.updatePosition()

    }

     bottomLeft() {
       
        if(this.y <= 570) {
            clearInterval(this.ballInterval)
            this.ballInterval = null
        }
        // this.keeper.dive(90)
     
        this.x -= 5;
        this.y -= 3;
      
  
     
      this.updatePosition()

    }
  
     bottomRight() {
       
        if(this.y <= 570) {
            clearInterval(this.ballInterval)
            this.ballInterval = null
        }
        // this.keeper.dive(88)
     
        this.x += 5;
        this.y -= 3;
   

     
      this.updatePosition()

    }

}
