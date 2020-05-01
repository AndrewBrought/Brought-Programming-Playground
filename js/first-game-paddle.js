export default class Paddle {
   constructor(gameWidth, gameHeight) {
       this.width = 150;  // it is my understanding that 'this' is referring to the paddle
       this.height = 30;


       this.position = {
           x: gameWidth / 2 - this.width / 2, //This will start us in the middle of the screen
           y: gameHeight - this.height - 10 //10px
       };
   }

   draw(ctx) {
       ctx.fillStyle = '#0f0';
       ctx.fillRect(this.position.x, this.position.y, this.width, this. height);
   }
}