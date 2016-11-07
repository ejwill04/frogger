

function Car(x, y, width, height, direction, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
  this.world = world;
}

Car.prototype.draw = function(context, carRightImage) {
  context.fillStyle = 'transparent';
  context.drawImage(carRightImage, this.x, this.y, this.width, this.height);
  return this;
};

Car.prototype.move = function() {
  if (this.direction === 'right') {
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

module.exports = Car;
