var Car = require("./car.js");

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var carSize = 25;
var frogSize = 25;
var frogHopDistance = 10;

requestAnimationFrame(function gameLoop() {
  collisionDetection();
  clearCanvas();
  buildAndStartCars();
  frogger();
  requestAnimationFrame(gameLoop);
});

function collisionDetection() {
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



var frog = new GreenThing();

function frogger() {
  drawFrog();
  moveFrog();
}

function drawFrog() {
  context.fillRect(frog.x,frog.y,frog.width,frog.height);
}

var moveKeyStatus = {
  right: false,
  left: false,
  up: false,
  down: false,
};

var arrowKeys = {
  right: 39,
  left: 37,
  up: 38,
  down: 40
};

function moveFrog() {
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  if(moveKeyStatus.right && frog.x < canvas.width-frog.width) {
    frog.x += frogHopDistance;
  }
  else if(moveKeyStatus.left && frog.x > 0) {
    frog.x -= frogHopDistance;
  }
  else if (moveKeyStatus.up && frog.y > 0) {
    frog.y -= frogHopDistance;
  }
  else if(moveKeyStatus.down && frog.y < canvas.height-frog.height){
    frog.y += frogHopDistance;
  }
}

function keyDownHandler(event) {
  if(event.keyCode == arrowKeys.right) {
    moveKeyStatus.right = true;
  }
  else if(event.keyCode == arrowKeys.left) {
    moveKeyStatus.left = true;
  }
  else if(event.keyCode == arrowKeys.down) {
    moveKeyStatus.down = true;
  }
  else if(event.keyCode == arrowKeys.up) {
    moveKeyStatus.up = true;
  }
}

function keyUpHandler(event) {
  if(event.keyCode == arrowKeys.right) {
    moveKeyStatus.right = false;
  }
  else if(event.keyCode == arrowKeys.left) {
    moveKeyStatus.left = false;
  }
  else if(event.keyCode == arrowKeys.down) {
    moveKeyStatus.down = false;
  }
  else if(event.keyCode == arrowKeys.up) {
    moveKeyStatus.up = false;
  }
}

var cars = [];

for (var i = 0; i < 5; i++) {
  x = -200 * i;
  cars.push(new Car(x, 100, carSize, carSize, 'right', canvas));
}

for (var i = 0; i < 5; i++) {
  x = -150 * i;
  cars.push(new Car(x, 300, carSize, carSize, 'right', canvas));
}

for (var i = 0; i < 5; i++) {
  x = 150 * i;
  cars.push(new Car(x, 200, carSize, carSize, 'left', canvas));
}

for (var i = 0; i < 5; i++) {
  x = 200 * i;
  cars.push(new Car(x, 400, carSize, carSize, 'left', canvas));
}

function buildAndStartCars () {
  cars.forEach(function (car) { car.draw().move();});
}

function clearCanvas () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
