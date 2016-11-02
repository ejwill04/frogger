var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var frogW = 50;
var frogH = 50;
var frogX = (canvas.width * 0.5) - (frogW * 0.5);
var frogY = canvas.height - frogH;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawFrog() {
  context.fillStyle = 'Green';
  context.fillRect(frogX,frogY,frogW,frogH);

  if(rightPressed && frogX < canvas.width-frogW) {
    frogX += 7;
  }
  else if(leftPressed && frogX > 0) {
    frogX -= 7;
  }
  else if (upPressed && frogY > 0) {
    frogY -= 7;
  }
  else if(downPressed && frogY < canvas.height-frogH){
    frogY += 7;
  }
}

function keyDownHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = true;
    }
    else if(event.keyCode == 37) {
        leftPressed = true;
    }
    else if(event.keyCode == 40) {
        downPressed = true;
    }
    else if(event.keyCode == 38) {
        upPressed = true;
    }
}

function keyUpHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = false;
    }
    else if(event.keyCode == 37) {
        leftPressed = false;
    }
    else if(event.keyCode == 40) {
        downPressed = false;
    }
    else if(event.keyCode == 38) {
        upPressed = false;
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

requestAnimationFrame(function gameLoop() {
  clearCanvas();
  buildAndStartCars();
  drawFrog();
  requestAnimationFrame(gameLoop);
});

function clearCanvas () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function buildAndStartCars () {
  cars.forEach(function (car) { car.draw().move();});
}
