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

Frog.prototype.move = function (keyStatus) {
  if(keyStatus.right && (this.x < this.world.right)) {
    this.x += this.world.block;
    keyStatus.right = false;
  } else if(keyStatus.left && this.x > this.world.left) {
    this.x -= this.world.block;
    keyStatus.left = false;
  } else if (keyStatus.up && this.y > this.world.top) {
    this.y -= this.world.block;
    keyStatus.up = false;
  } else if(keyStatus.down && this.y < this.world.bottom){
    this.y += this.world.block;
    keyStatus.down = false;
  }
};

module.exports = Frog;
