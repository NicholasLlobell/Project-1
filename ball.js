// Shoot ball
/////////////////accelerate x/y
class Ball {
    constructor(board, keeper) {
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
      this.board.appendChild(this.element)
      this.controlBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
             switch(e.target.id){
                 case "top-right": this.ballInterval = setInterval(() => this.topRight(), 10);
                 break;
                 case "top-left": this.ballInterval = setInterval(() => this.topLeft(), 10);
                 break;
                 case "bottom-right": this.ballInterval = setInterval(() => this.bottomRight(), 10);
                 break;
                 case "bottom-left": this.ballInterval = setInterval(() => this.bottomLeft(), 10);
                 break;
                 default: return

                 
             }
          })
      })
    
    }

    updatePosition(){
        if(this.y === 430) {
            clearInterval(this.ballInterval)
            this.ballInterval = null
        }
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
    }


//top left-65 top right-83 bottom left-90 bottom right-88

     topLeft() {
         this.keeper.dive(65)
        this.x -= 5;
        this.y -= 5;
     
      this.updatePosition()
    }

     topRight() {
        this.keeper.dive(83)
      if (this.x !== 1000 && this.y !== 250) {
        this.x += 5;
        this.y -= 5;
      }
   
      else {
        clearInterval(start);
      }
      this.updatePosition()

    }

     bottomLeft() {
        this.keeper.dive(90)
      if (this.x !== 185 && this.y !== 500) {
        this.x -= 5;
        this.y -= 3;
      }
  
      else {
        clearInterval(start);
      }
      this.updatePosition()

    }
  
     bottomRight() {
        this.keeper.dive(88)
      if (this.x !== 1010 && this.y !== 500) {
        this.x += 5;
        this.y -= 3;
      }

      else {
        clearInterval(start);
      }
      this.updatePosition()

    }

}
