var Frog = function (x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
};

Frog.prototype.draw = function (context, frogImage) {
  context.beginPath();
  context.drawImage(frogImage,this.x,this.y,this.width,this.height);
  context.fillStyle = 'transparent';
  context.fill();
  context.closePath();
  return this;
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

Frog.prototype.move = function (gameBlock) {
  if(keyStatus.right && (this.x < this.world.width - this.width)) {
    this.x += gameBlock;
    keyStatus.right = false;
  } else if(keyStatus.left && this.x > 0) {
    this.x -= gameBlock;
    keyStatus.left = false;
  } else if (keyStatus.up && this.y > 0) {
    this.y -= gameBlock;
    keyStatus.up = false;
  } else if(keyStatus.down && this.y < this.world.height - this.height){
    this.y += gameBlock;
    keyStatus.down = false;
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
