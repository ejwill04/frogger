var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var frogW = 50;
var frogH = 50;
var frogX = (canvas.width * 0.5) - (frogW * 0.5);
var frogY = canvas.height - frogH;

requestAnimationFrame(function gameLoop() {
  clearCanvas();
  buildAndStartCars();
  frog();
  requestAnimationFrame(gameLoop);
});

function frog() {
  drawFrog();
  moveFrog();
}

function drawFrog() {
  context.fillRect(frogX,frogY,frogW,frogH);
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

var mult = false,
    prev = 0;

function moveFrog() {
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  if(moveKeyStatus.right && frogX < canvas.width-frogW) {
    frogX += 25;
  }
  else if(moveKeyStatus.left && frogX > 0) {
    frogX -= 25;
  }
  else if (moveKeyStatus.up && frogY > 0) {
    frogY -= 25;
  }
  else if(moveKeyStatus.down && frogY < canvas.height-frogH){
    frogY += 25;
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

function Car(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Car.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Car.prototype.move = function() {
  if (this.x !== canvas.width) {
    this.x++;
  } else {
    this.x = -this.width;
  }
  return this;
};

var cars = [];
//first column of cars
cars.push(new Car(-50,50,50,50));
cars.push(new Car(-100,150,50,50));
cars.push(new Car(-200,250,50,50));
cars.push(new Car(-20,350,50,50));
cars.push(new Car(-50,450,50,50));
//secound column of cars
cars.push(new Car(-200,50,50,50));
cars.push(new Car(-400,150,50,50));
cars.push(new Car(-500,250,50,50));
cars.push(new Car(-300,350,50,50));
cars.push(new Car(-200,450,50,50));

function buildAndStartCars () {
  cars.forEach(function (car) { car.draw().move();});
}

function clearCanvas () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
