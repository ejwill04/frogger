var Car = require("./car.js");
var Frog = require("./frog.js");
var Log = require("./logs.js");

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var carSize = 25;
var lives = 3;
var frogHopDistance = 10;
var cars = [];
var logs = [];

var world = new World(canvas, context);
var frog = new Frog(500, 575, 25, 25, world);

welcomeScreen();
updateLivesCounter();

requestAnimationFrame(function gameLoop() {
  world.winCollision();
  world.carCollision();
  world.clearCanvas();
  world.logCollision();
  world.carsDrawMove();
  world.logsDrawMove();
  frog.draw();
  frog.move();
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

function World (canvas, context) {
  this.canvas = canvas;
  this.context = context;
  this.width = 1000;
  this.height = 600;
}

World.prototype.carsDrawMove = function () {
  cars.forEach(function (car) { car.draw().move();});
};

World.prototype.logsDrawMove = function () {
  logs.forEach(function (log) { log.draw().move();});
};

World.prototype.clearCanvas = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

World.prototype.carCollision = function () {
  cars.forEach(function (car) {
    if (frog.x < car.x + car.width - frogHopDistance &&
      frog.x + frog.width - frogHopDistance > car.x &&
      frog.y < car.y + car.height &&
      frog.height + frog.y > car.y)
      {resetLocation();
      livesCount();
    }
  });
};

World.prototype.winCollision = function () {
  if (frog.y < 0) {
    alert('winning');
    location.reload();
  }
};

World.prototype.logCollision = function () {
  logs.forEach(function(log) {
    if (log.direction === 'right') {
      if (frog.x < log.x + log.width - frogHopDistance &&
        frog.x + frog.width - frogHopDistance > log.x &&
        frog.y < log.y + log.height &&
        frog.height + frog.y > log.y) {
          frog.x++;
      }
    } else if (log.direction === 'left') {
      if (frog.x < log.x + log.width - frogHopDistance &&
        frog.x + frog.width - frogHopDistance > log.x &&
        frog.y < log.y + log.height &&
        frog.height + frog.y > log.y) {
          frog.x--;
      }
    }
  });
};

for (var i = 0; i < 5; i++) {
  x = -100 * i;
  logs.push(new Log(world, x, 250, 70, 30, 'right'));
}

for (var i = 0; i < 5; i++) {
  x = 100 * i;
  logs.push(new Log(world, x, 150, 70, 30, 'left'));
}

for (var i = 0; i < 5; i++) {
  x = -200 * i;
  cars.push(new Car(x, 100, carSize, carSize, 'right', world));
}

for (var i = 0; i < 5; i++) {
  x = -150 * i;
  cars.push(new Car(x, 300, carSize, carSize, 'right', world));
}

for (var i = 0; i < 5; i++) {
  x = 150 * i;
  cars.push(new Car(x, 200, carSize, carSize, 'left', world));
}

for (var i = 0; i < 5; i++) {
  x = 200 * i;
  cars.push(new Car(x, 400, carSize, carSize, 'left', world));
}

function resetLocation() {
  frog.x = 500;
  frog.y = 575;
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
