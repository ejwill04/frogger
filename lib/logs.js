function Log(x, y, width, height, direction) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
}
// could we create prototypes for x and y that increment through Car?

Log.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height, this.direction);
  return this;

};

Log.prototype.move = function() {

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
