// let snake = {
//     body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
//     nextDirection: [1, 0]
//   }

//   let gameState = {
//     apple: [11, 8],
//     snake: snake // from above
//   }

let grid = document.querySelector(".grid");
console.log("grid is: ", grid);

let playAgainButton = document.querySelector(".playAgainButton");
console.log("playAgainButton is: ", playAgainButton);

let playAgain = document.querySelector('.playAgain')
console.log("this is playAgain: ", playAgain);

let currentScoreDisplay = document.querySelector('.currentScoreDisplay');
console.log('current score is: ', currentScoreDisplay);

let highScoreDisplay = document.querySelector('.highScoreDisplay');
console.log('high score is: ', highScoreDisplay);

let width = 10;
console.log('this is the width: ', width);

let currentIndex = 0;
console.log('this is the current index: ', currentIndex);

let appleIndex = 0;
console.log('this is the current apple index: ', appleIndex);

let currentSnake = [2, 1, 0];
console.log('this is current snake', currentSnake);

let direction = 1;
console.log('this is the direction: ', direction);

let currentScore = 0;
console.log('this is the current score', currentScore);

let highScore = 0;
console.log('this is the high score', highScore);

let speed = 0.8;
console.log('this is the current speed', speed);

let intervalTime = 0;
console.log('this is the interval time', intervalTime);

let interval = 0;
console.log('this is the interval', interval);