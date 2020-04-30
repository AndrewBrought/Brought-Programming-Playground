class Paddle {
   constructor(gameWidth, gameHeight) {
       this.width = 150;
       this.height = 30;


       this.position = {
           x: gameWidth / 2 - this.width / 2, //This will start us in the middle of the screen
           y: gameHeight - this.height - 10, //10px
       }
   }

   draw(ctx) {
       ctx.fillRect(this.position.x, this.position.y, this.width, this. height);
   }
}