function Car(x, y, width, height, direction, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
  this.world = world;
}

Car.prototype.draw = function(context, carRightImage) {
  this.world.context.drawImage(carRightImage, this.x, this.y, this.width, this.height);
  this.world.context.fillStyle = 'transparent';
  return this;
};

Car.prototype.move = function(velocity) {
  if (this.direction === 'right') {
    this.moveRightBoundCars(velocity);
    return this;
  } else if (this.direction === 'left') {
    this.moveLeftBoundCars(velocity);
  }
};

Car.prototype.moveRightBoundCars = function(velocity) {
  if (this.x < this.world.width) {
    this.x = this.x + velocity;
  } else {
    this.x = -this.width;
  }
};

Car.prototype.moveLeftBoundCars = function(velocity) {
  if (this.x > -this.width) {
    this.x = this.x - velocity;
  } else {
    this.x = this.world.width;
  }
};

module.exports = Car;
