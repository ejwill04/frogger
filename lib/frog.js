var frogHopDistance = 10;

var Frog = function (x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
  this.context = world.context;
};

Frog.prototype.draw = function () {
  this.context.fillRect(this.x,this.y,this.width,this.height);
  return this;
};

Frog.prototype.move = function() {
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  if(moveKeyStatus.right && (this.x < this.world.width - this.width)) {
    this.x += frogHopDistance;
  }
  else if(moveKeyStatus.left && this.x > 0) {
    this.x -= frogHopDistance;
  }
  else if (moveKeyStatus.up && this.y > 0) {
    this.y -= frogHopDistance;
  }
  else if(moveKeyStatus.down && this.y < this.world.height - this.height){
    this.y += frogHopDistance;
  }
};

var moveKeyStatus = {
  right: false,
  left: false,
  up: false,
  down: false
};

var arrowKeys = {
  right: 39,
  left: 37,
  up: 38,
  down: 40
};


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

module.exports = Frog;
