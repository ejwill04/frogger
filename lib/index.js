var Car = require("./car.js");
var Frog = require("./frog.js");
var Log = require("./logs.js");
var World = require("./world.js");

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var carSize = 25;

var lives = 3;
var frogHopDistance = 10;

requestAnimationFrame(function gameLoop() {
  carCollisionDetection();
  clearCanvas();
  logCollisionDetection();
  buildAndStartCars();
  buildAndStartLogs();
  frog.draw();
  frog.move();
  requestAnimationFrame(gameLoop);
});

var world = new World(canvas, context);
var frog = new Frog(500, 575, 25, 25, world);
var cars = [];
var logs = [];

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

function buildAndStartCars () {
  cars.forEach(function (car) { car.draw().move();});
}

function buildAndStartLogs () {
  logs.forEach(function (log) { log.draw().move();});
}

function clearCanvas () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function carCollisionDetection() {
  cars.forEach(function (car) {
    if (frog.x < car.x + car.width - frogHopDistance &&
      frog.x + frog.width - frogHopDistance > car.x &&
      frog.y < car.y + car.height &&
      frog.height + frog.y > car.y)
      {resetLocation();
      livesCount();
    }
  });
}

function logCollisionDetection() {
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
}

function resetLocation() {
  frog.x = 500;
  frog.y = 575;
}

//three lives and game over

function livesCount () {
  --lives;
  if(lives === 0) {
    gameOver();
  }
}

function gameOver() {
  alert('game over');
  location.reload();
}
