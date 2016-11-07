function Log(x, y, width, height, direction, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
  this.world = world;
}
// could we create prototypes for x and y that increment through Car?

Log.prototype.draw = function(context, logImage) {
  context.drawImage(logImage, this.x, this.y, this.width, this.height);
  context.fillStyle = 'transparent';
  return this;
};

Log.prototype.move = function() {
  if(this.direction === 'right') {
    if (this.x !== this.world.width) {
      this.x++;
    } else {
      this.x = -this.width;
    }
    return this;

  } else if (this.direction === 'left') {
    if (this.x !== -this.width) {
      this.x--;
    } else {
      this.x = this.world.width;
    }
  }
};

module.exports = Log;
