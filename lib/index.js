var Car = require("./car.js");
var Frog = require("./frog.js");
var World = require("./world.js");

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var carSize = 25;
var frogSize = 25;
var frogHopDistance = 10;

requestAnimationFrame(function gameLoop() {
  collisionDetection();
  clearCanvas();
  logCollisionDetection();
  buildAndStartCars();
  buildAndStartLogs();
  frogger();
  requestAnimationFrame(gameLoop);
});

var world = new World(canvas, context);

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

var Frog = function () {
  // create another object called world
  // have each object receive world so it knows the confines in interact inside of that world

  this.x = (canvas.width/2 - frogSize/2);
  this.y = canvas.height - frogSize;
  this.width = frogSize;
  this.height = frogSize;
};

var frog = new Frog();

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

var logs = [];

function Log(x, y, width, height, direction) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
}
// could we create prototypes for x and y that increment through Car?

Log.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height, this.direction);
  return this;

};

Log.prototype.move = function() {

  if (this.direction === 'right') {
    if (this.x !== this.canvas.width) {
      this.x++;
    } else {
      this.x = -this.width;
    }
    return this;

  } else if (this.direction === 'left') {
    if (this.x !== -this.width) {
      this.x--;
    } else {
      this.x = this.canvas.width;
    }
  }
};

for (var i = 0; i < 5; i++) {
  x = -100 * i;
  logs.push(new Car(x, 250, 70, 30, 'right', world));
}

for (var i = 0; i < 5; i++) {
  x = 100 * i;
  logs.push(new Car(x, 150, 70, 30, 'left', world));
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
