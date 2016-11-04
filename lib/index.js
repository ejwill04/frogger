var Car = require("./car.js");
var Frog = require("./frog.js");
var Log = require("./logs.js");
var World = require("./world.js");

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var carSize = 25;
var frogSize = 25;
var frogHopDistance = 10;

requestAnimationFrame(function gameLoop() {
  carCollisionDetection();
  clearCanvas();
  logCollisionDetection();
  buildAndStartCars();
  buildAndStartLogs();
  drawFrog();
  moveFrog();
  requestAnimationFrame(gameLoop);
});

var world = new World(canvas, context);
var frog = new Frog();
var cars = [];
var logs = [];

for (var i = 0; i < 5; i++) {
  x = -100 * i;
  logs.push(new Log(x, 250, 70, 30, 'right', world));
}

for (var i = 0; i < 5; i++) {
  x = 100 * i;
  logs.push(new Log(x, 150, 70, 30, 'left', world));
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
      { alert('Game over');
      location.reload();
    }
  });
}

function logCollisionDetection() {
  logs.forEach(function(log) {
    if (frog.x < log.x + log.width - frogHopDistance &&
      frog.x + frog.width - frogHopDistance > log.x &&
      frog.y < log.y + log.height &&
      frog.height + frog.y > log.y) {
        frog.x++;
        console.log("cruising");
      }
    });
  }
