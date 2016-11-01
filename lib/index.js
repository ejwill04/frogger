var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

//create a frog
var frogger = function() {
  var rectW = 50;
  var rectH = 50;
  var frogX = (context.canvas.width * 0.5) - (rectW * 0.5);
  var frogY = context.canvas.height - rectH;
  context.fillRect(frogX,frogY,rectW,rectH);
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

if(rightPressed) {
    frogX += 7;
}
else if(leftPressed) {
    frogX -= 7;
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
cars.push(new Car(0,50,50,50));
cars.push(new Car(0,150,50,50));
cars.push(new Car(0,250,50,50));
cars.push(new Car(0,350,50,50));
cars.push(new Car(0,450,50,50));
//secound column of cars
cars.push(new Car(-200,50,50,50));
cars.push(new Car(-400,150,50,50));
cars.push(new Car(-500,250,50,50));
cars.push(new Car(-300,350,50,50));
cars.push(new Car(-200,450,50,50));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  cars.forEach(function (car) { car.draw().move();});
  frogger();
  requestAnimationFrame(gameLoop);
});
