// let snake = {
//     body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
//     nextDirection: [1, 0]
//   }

//   let gameState = {
//     apple: [11, 8],
//     snake: snake // from above
//   }

// let grid = document.querySelector(".grid");
// console.log("grid is: ", grid);

// let buttons = document.querySelector(".buttons");
// console.log("buttons is: ", buttons);

// let playAgain = document.querySelector('.playAgain');
// console.log("this is playAgain: ", playAgain);

// let startGame = document.querySelector('.startGame');
// console.log("this is start game: ", startGame)

// let currentScoreDisplay = document.querySelector('.currentScoreDisplay');
// console.log('current score is: ', currentScoreDisplay);

// let highScoreDisplay = document.querySelector('.highScoreDisplay');
// console.log('high score is: ', highScoreDisplay);

// let width = 10;
// console.log('this is the width: ', width);

// let currentIndex = 0;
// console.log('this is the current index: ', currentIndex);

// let appleIndex = 0;
// console.log('this is the current apple index: ', appleIndex);

// let currentSnake = [2, 1, 0];
// console.log('this is current snake', currentSnake);

// let direction = 1;
// console.log('this is the direction: ', direction);

// let currentScore = 0;
// console.log('this is the current score', currentScore);

// let highScore = 0;
// console.log('this is the high score', highScore);

// let speed = 0.8;
// console.log('this is the current speed', speed);

// let intervalTime = 0;
// console.log('this is the interval time', intervalTime);

// let interval = 0;
// console.log('this is the interval', interval);

//board 
const blockSize = 25;
const rows = 20;
const columns = 20;
const board = document.getElementById('board');
const context = board.getContext('2d'); //used for drawing on the board;

//snake head 
let snakeX;
let snakeY;

let velocityX = 0;
let velocityY = 0;

//food
let foodX;
let foodY;


window.onload = function () {
board.height = rows * blockSize;
board.width = columns * blockSize;

snakeRandomizer();
foodRandomizer();
document.addEventListener('keyup', changeDirection);
update();
}

function update () {
    //board rendering
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);

    //Snake rendering
    context.fillStyle = 'lightblue';
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    //food rendering
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);
}

//changing directions (16:31)
function changeDirection(event) {
    if(event.code == "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    }
    else if(event.code == "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    }
    else if(event.code == "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    }
    else if(event.code == "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
}



//randomizes the food on the board
function foodRandomizer() {
    foodX = Math.floor(Math.random() * columns) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
};

//randomized the snake
function snakeRandomizer() {
    snakeX = Math.floor(Math.random() * columns) * blockSize;
    snakeY = Math.floor(Math.random() * columns) * blockSize;
};