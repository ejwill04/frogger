var frogHopDistance = 10;

var Frog = function (x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
  this.context = world.context;
};

Frog.prototype.draw = function (context, frogImg) {

  this.context.fillRect(this.x,this.y,this.width,this.height);
  return this;
};

Frog.prototype.move = function () {
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  if(keyStatus.right && (this.x < this.world.width - this.width)) {
    this.x += frogHopDistance;
  } else if(keyStatus.left && this.x > 0) {
    this.x -= frogHopDistance;
  } else if (keyStatus.up && this.y > 0) {
    this.y -= frogHopDistance;
  } else if(keyStatus.down && this.y < this.world.height - this.height){
    this.y += frogHopDistance;
  }
};

var keyStatus = {
  right: false,
  left: false,
  up: false,
  down: false
};

var arrow = {
  right: 39,
  left: 37,
  up: 38,
  down: 40
};


function keyDownHandler(event) {
  if(event.keyCode == arrow.right) {
    keyStatus.right = true;
  } else if(event.keyCode == arrow.left) {
    keyStatus.left = true;
  } else if(event.keyCode == arrow.down) {
    keyStatus.down = true;
  } else if(event.keyCode == arrow.up) {
    keyStatus.up = true;
  }
}

function keyUpHandler(event) {
  if(event.keyCode == arrow.right) {
    keyStatus.right = false;
  } else if(event.keyCode == arrow.left) {
    keyStatus.left = false;
  } else if(event.keyCode == arrow.down) {
    keyStatus.down = false;
  } else if(event.keyCode == arrow.up) {
    keyStatus.up = false;
  }
}

module.exports = Frog;
