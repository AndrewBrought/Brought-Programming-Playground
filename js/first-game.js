import Paddle from '/js/first-game-paddle';

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d"); //ctx = context

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);
//===DEMO SQUARES
// ctx.fillStyle = '#f00';
// ctx.fillRect(20, 20, 100, 100);
//
//
ctx.fillStyle = '#00f';
ctx.fillRect(200, 200, 50, 50);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);