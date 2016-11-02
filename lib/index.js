var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var frogSize = 50;

requestAnimationFrame(function gameLoop() {
  clearCanvas();
  buildAndStartCars();
  frogger();
  collisionDetection();
  requestAnimationFrame(gameLoop);
});

function collisionDetection() {
  cars.forEach(function (car) {
    if (frog.x < car.x + car.width &&
      frog.x + frog.width > car.x &&
      frog.y < car.y + car.height &&
      frog.height + frog.y > car.y)
    { alert('Game over');
      location.reload();
    }
  });
}


var GreenThing = function () {
  this.x = (canvas.width/2 - frogSize/2);
  this.y = canvas.height - frogSize;
  this.width = 50;
  this.height = 50;
};

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
    frog.x += 25;
  }
  else if(moveKeyStatus.left && frog.x > 0) {
    frog.x -= 25;
  }
  else if (moveKeyStatus.up && frog.y > 0) {
    frog.y -= 25;
  }
  else if(moveKeyStatus.down && frog.y < canvas.height-frog.height){
    frog.y += 25;
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
//could we create prototypes for x and y that increment through Car?

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
// dynamiclly create new cars (ideas: forEach chg x and y + 50)

function buildAndStartCars () {
  cars.forEach(function (car) { car.draw().move();});
}

function clearCanvas () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
