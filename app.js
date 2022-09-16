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

let score = 0;


let currentScoreDisplay = document.querySelector('.currentScoreDisplay');


function renderScore() {
    currentScoreDisplay.innerHTML = `Current Score: ${score}`;
    console.log(currentScoreDisplay.innerHTML);
}


let highScoreDisplay = document.querySelector('.highScoreDisplay');




//Game over message
let output = document.getElementById('outputText');


let playAgain = document.querySelector('.playAgain');


playAgain.addEventListener('click', function() {
    location.reload();
});

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

//snake body
let snakeBody = [];

//food
let foodX;
let foodY;

//end of game
let gameOver = false;


//start game variable
let startGame = document.querySelector('.startGame');

startGame.addEventListener('click', gameStart);

function gameStart() {
    renderScore();
    
}

snakeRandomizer();
foodRandomizer();

board.height = rows * blockSize;
board.width = columns * blockSize;


document.addEventListener('keyup', changeDirection);

setInterval(update, 1000/10); //every 100 milliseconds runs update function


function update () {
    if (gameOver) {
        return;
    }
    
    //board rendering
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);

    //food rendering
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);
    // context.arc(foodX, foodY, 25, 0, 2 * Math.PI);

    //colliding snake and food
    if(snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]); //grows segment where food was
        foodRandomizer(); //respawns food to random location function
        score++; //increases score everytime there is a collision w/ food and snake
        renderScore();
    }
    

    //makes body follow head
    for(let i = snakeBody.length -1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1]; //body gets previous x,y coordinates to move forward
        
    }
    

    //updates 2nd segment to take heads place (if there are body parts in the array)
    if(snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    //Snake rendering
    context.fillStyle = 'green';

    snakeX += velocityX * blockSize; //to move by unit not px
    snakeY += velocityY * blockSize; //to move by unit not px
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    //drawing body
    for(let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //game over conditions
    //out of grid
    if (snakeX < 0 || snakeX > columns * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
        gameOver = true;
        output.innerText = 'Game Over';
    }
    //if snake overlaps
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            output.innerText = 'Game Over';
        }
    }
}

//changing directions --- != prevents snake from going back the direction it came from (16:31)
function changeDirection(event) {
    if(event.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if(event.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if(event.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if(event.code == "ArrowRight" && velocityX != -1) {
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