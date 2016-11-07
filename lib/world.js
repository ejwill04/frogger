var Car = require("./car.js");
var Frog = require("./frog.js");
var Log = require("./logs.js");

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
// var carSize = 50;
var lives = 3;
// var frogHopDistance = 50;
var cars = [];
var logs = [];
var frogImage = document.getElementById('frog-image');
var carRightImage = document.getElementById('car-right-image');
var logImage = document.getElementById('log-image');
// var frogSize = 50;
var isDrowning = true;

var world = new World(context);
var gameBlock = world.height/14;
var frog = new Frog(world.width/2, world.height - gameBlock, gameBlock, gameBlock, world);
canvas.width = world.width;
canvas.height = world.height;

welcomeScreen();
updateLivesCounter();

requestAnimationFrame(function gameLoop() {
  world.carCollision();
  world.logCollision();
  world.clearCanvas();
  deathByWater();
  world.carsDrawMove();
  world.logsDrawMove();
  frog.draw(context, frogImage);
  frog.move(gameBlock);
  world.winCollision();
  requestAnimationFrame(gameLoop);
});

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

function World (context, canvas) {
  this.context = context;
  this.width = 500;
  this.height = 700;
}

function deathByWater () {
  if ((frog.y < (gameBlock * 7)) && isDrowning) {
    resetLocation();
    livesCount();
  }
}

World.prototype.carsDrawMove = function () {
  cars.forEach(function (car) { car.draw(context, carRightImage).move();});
};

World.prototype.logsDrawMove = function () {
  logs.forEach(function (log) { log.draw(context, logImage).move();});
};

World.prototype.clearCanvas = function () {
  context.clearRect(0, 0, world.width, world.height);
};

World.prototype.carCollision = function () {
  cars.forEach(function (car) {
    if (frog.x < car.x + car.width &&
      frog.x + frog.width > car.x &&
      frog.y < car.y + car.height &&
      frog.height + frog.y > car.y)
      {resetLocation();
      livesCount();
    }
  });
};

World.prototype.winCollision = function () {
  if (frog.y < gameBlock * 1.99) {
    alert('winning');
    location.reload();
  }
};

World.prototype.logCollision = function () {
  logs.forEach(function(log) {
    if (log.direction === 'right') {
      if (frog.x < log.x + log.width &&
        frog.x + frog.width> log.x &&
        frog.y < log.y + log.height &&
        frog.height + frog.y > log.y) {
          frog.x++;
          isDrowning = false;
      }
    } else if (log.direction === 'left') {
      if (frog.x < log.x + log.width &&
        frog.x + frog.width > log.x &&
        frog.y < log.y + log.height &&
        frog.height + frog.y > log.y) {
          frog.x--;
          isDrowning = false;
      }
    }
  });
};

for (var i = 0; i < 5; i++) {
  x = -100 * i;
  logs.push(new Log(world, x, gameBlock * 2, gameBlock * 2, gameBlock, 'right'));
}

for (var i = 0; i < 5; i++) {
  x = -100 * i;
  logs.push(new Log(world, x, gameBlock * 3, gameBlock, gameBlock, 'right'));
}

for (var i = 0; i < 5; i++) {
  x = 100 * i;
  logs.push(new Log(world, x, gameBlock * 4, gameBlock * 2, gameBlock, 'left'));
}

for (var i = 0; i < 5; i++) {
  x = 100 * i;
  logs.push(new Log(world, x, gameBlock * 5, gameBlock, gameBlock, 'left'));
}

for (var i = 0; i < 5; i++) {
  x = 100 * i;
  logs.push(new Log(world, x, gameBlock * 6, gameBlock, gameBlock, 'left'));
}

for (var i = 0; i < 2; i++) {
  x = 200 * i;
  cars.push(new Car(x, gameBlock * 8, gameBlock, gameBlock, 'left', world));
}

for (var i = 0; i < 3; i++) {
  x = -200 * i;
  cars.push(new Car(x, gameBlock * 9, gameBlock, gameBlock, 'right', world));
}

for (var i = 0; i < 2; i++) {
  x = -150 * i;
  cars.push(new Car(x, gameBlock * 10, gameBlock, gameBlock, 'right', world));
}

for (var i = 0; i < 3; i++) {
  x = 150 * i;
  cars.push(new Car(x, gameBlock * 11, gameBlock, gameBlock, 'left', world));
}

for (var i = 0; i < 2; i++) {
  x = 200 * i;
  cars.push(new Car(x, gameBlock * 12, gameBlock, gameBlock, 'left', world));
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

function updateLivesCounter () {
  $('#lives-counter').html(lives);
}

function gameOver() {
  alert('game over');
  location.reload();
}

module.exports = World;
