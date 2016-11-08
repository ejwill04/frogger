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
  //can we simplify the draw() function?  Not sure if we need begin/fillStyle/fill/or clossePath
};

Frog.prototype.move = function (gameBlock, keyStatus) {
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

module.exports = Frog;
