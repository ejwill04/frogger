var Car = require("./car.js");
var Frog = require("./frog.js");
var Log = require("./logs.js");
var UserInput = require("./user-input.js");

var frogImage = document.getElementById('frog-image');
var carRightImage = document.getElementById('car-right-image');
var logImage = document.getElementById('log-image');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var lives = 3;
var cars = [];
var logs = [];
var isDrowning = true;
var velocity = 1;
var level = 1;

var userInput = new UserInput();
userInput.initializeArrowEventListeners();
var world = new World(context);
var gameBlock = world.height/14;
var frog = new Frog(world.width/2, world.height - gameBlock, gameBlock, gameBlock, world);
canvas.width = world.width;
canvas.height = world.height;

welcomeScreen();
updateLevelCounter();
updateLivesCounter();

requestAnimationFrame(function gameLoop() {
  world.clearCanvas();
  world.carsDrawMove();
  world.logsDrawMove();
  frog.draw(context, frogImage);
  frog.move(gameBlock, userInput.keyStatus);
  world.carCollision();
  world.logCollision();
  world.winCollision();
  deathByWater();
  requestAnimationFrame(gameLoop);
});

function World (context, canvas) {
  this.context = context;
  this.width = 500;
  this.height = 700;
}

World.prototype.carsDrawMove = function () {
  cars.forEach(function (car) { car.draw(context, carRightImage).move(velocity);});
};

World.prototype.logsDrawMove = function () {
  logs.forEach(function (log) { log.draw(context, logImage).move(velocity);});
};

World.prototype.clearCanvas = function () {
  context.clearRect(0, 0, world.width, world.height);
};

World.prototype.carCollision = function () {
  cars.forEach(function (car) {
    if (frog.x < car.x + car.width - 25 &&
      frog.x + frog.width - 25> car.x &&
      frog.y < car.y + car.height - 25 &&
      frog.height + frog.y - 25 > car.y)
      {resetLocation();
      livesCount();
    }
  });
};

World.prototype.winCollision = function () {
  if (frog.y < gameBlock * 2 &&
    ((frog.x > 0 && frog.x < 40) ||
    (frog.x > 105 && frog.x < 145) ||
    (frog.x > 210 && frog.x < 250) ||
    (frog.x > 320 && frog.x < 360) ||
    (frog.x > 425 && frog.x < 465))) {
    isDrowning = false;
    increaseVelocity();
    alert('winning');
    resetLocation();
    levelCounter();
    // setTimeout(function() {resetLocation();},1250);
  }
};

World.prototype.logCollision = function () {
  logs.forEach(function(log) {
    if (log.direction === 'right') {
      if (frog.x < log.x + log.width - 25 &&
        frog.x + frog.width - 25> log.x &&
        frog.y < log.y + log.height &&
        frog.height + frog.y > log.y) {
          frog.x = frog.x + velocity;
          isDrowning = false;
      }
    } else if (log.direction === 'left') {
      if (frog.x < log.x + log.width - 25 &&
        frog.x + frog.width - 25 > log.x &&
        frog.y < log.y + log.height &&
        frog.height + frog.y > log.y) {
          frog.x = frog.x - velocity;
          isDrowning = false;
      }
    }
  });
};

for (var i = 1; i < 5; i++) {
  x = 200 * i;
  logs.push(new Log(x, gameBlock * 2, gameBlock, gameBlock, 'left', world));
}

for (var i = 1; i < 5; i++) {
  x = -100 * i;
  logs.push(new Log(x, gameBlock * 3, gameBlock, gameBlock, 'right', world));
}

for (var i = 1; i < 4; i++) {
  x = 200 * i;
  logs.push(new Log(x, gameBlock * 4, gameBlock * 2, gameBlock, 'left', world));
}

for (var i = 1; i < 5; i++) {
  x = 100 * i;
  logs.push(new Log(x, gameBlock * 5, gameBlock, gameBlock, 'right', world));
}

for (var i = 1; i < 6; i++) {
  x = 100 * i;
  logs.push(new Log(x, gameBlock * 6, gameBlock, gameBlock, 'left', world));
}

for (var i = 1; i < 3; i++) {
  x = 200 * i;
  cars.push(new Car(x, gameBlock * 8 - 8, gameBlock, gameBlock, 'left', world));
}

for (var i = 1; i < 4; i++) {
  x = -200 * i;
  cars.push(new Car(x, gameBlock * 9 - 8, gameBlock, gameBlock, 'right', world));
}

for (var i = 1; i < 3; i++) {
  x = 300 * i;
  cars.push(new Car(x, gameBlock * 10 - 8, gameBlock, gameBlock, 'left', world));
}

for (var i = 1; i < 4; i++) {
  x = 150 * i;
  cars.push(new Car(x, gameBlock * 11 - 8, gameBlock, gameBlock, 'right', world));
}

for (var i = 1; i < 3; i++) {
  x = 200 * i;
  cars.push(new Car(x, gameBlock * 12 - 8, gameBlock, gameBlock, 'left', world));
}

$('#start-button').on('click', function() {
  initiateGame();
});

function welcomeScreen () {
  $('#welcome-screen').show();
  $('#game-screen').hide();
}

function initiateGame () {
  $('#welcome-screen').hide();
  $('#game-screen').show();
}

function resetLocation() {
  frog.x = world.width/2;
  frog.y = world.height - gameBlock;
}

function livesCount () {
  --lives;
  updateLivesCounter();
  if(lives === 0) {
    gameOver();
  }
}

function deathByWater () {
  if ((frog.y < gameBlock * 7) && isDrowning) {
    setTimeout(function() {
      resetLocation();
      livesCount();},100);
    // resetLocation();
    // livesCount();
  }
  else {
    isDrowning = true;
  }
  //is this else statement necessary?
}

function updateLivesCounter () {
  $('#lives-counter').html(lives);
}

function levelCounter () {
  level++;
  updateLevelCounter();
}

function updateLevelCounter () {
  $('#level-counter').html(level);
}

function gameOver() {
  alert('game over');
  location.reload();
}

function increaseVelocity(){
  velocity = velocity * 1.4;
}

// function pausecomp(ms) {
// ms += new Date().getTime();
// while (new Date() < ms){}
// }
//
// setTimeout(function() {alert('hello');},1250);

module.exports = World;
