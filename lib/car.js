var World = require("./world.js");

function Car(x, y, width, height, direction, canvas) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
  this.canvas = canvas;
  this.context = canvas.getContext('2d');
}

Car.prototype.draw = function() {
  this.context.fillRect(this.x, this.y, this.width, this.height, this.direction);
  return this;
};

Car.prototype.move = function() {

  if (this.direction === 'right') {
    if (this.x !== this.canvas.width) {
      this.x++;
    } else {
      this.x = -this.width;
    }
    return this;

  } else if (this.direction === 'left') {
    if (this.x !== -this.width) {
      this.x--;
    } else {
      this.x = this.canvas.width;
    }
  }
};




module.exports = Car;
