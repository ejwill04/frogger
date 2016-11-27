function Log(x, y, width, height, direction, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
  this.world = world;
}

Log.prototype.draw = function(context, logImage) {
  this.world.context.drawImage(logImage, this.x, this.y, this.width, this.height);
  this.world.context.fillStyle = 'transparent';
  return this;
};

Log.prototype.move = function(velocity) {
  if(this.direction === 'right') {
    this.moveRightBoundLogs(velocity);
    return this;
  } else if (this.direction === 'left') {
    this.moveLeftBoundLogs(velocity);
    return this;
  }
};

Log.prototype.moveRightBoundLogs = function (velocity) {
  if (this.x < this.world.width) {
    this.x = this.x + velocity;
  } else {
    this.x = -this.width;
  }
};

Log.prototype.moveLeftBoundLogs = function (velocity) {
  if (this.x > -this.width) {
    this.x = this.x - velocity;
  } else {
    this.x = this.world.width;
  }
};

module.exports = Log;
