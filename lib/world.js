function World(context) {
  this.context = context;
  this.width = 500;
  this.height = 700;
  this.block = this.height/14;
  this.top = 0;
  this.bottom = this.height - this.block;
  this.right = this.width - this.block;
  this.left = 0;
}

World.prototype.carsDrawMove = function (cars, carRightImage, velocity) {
  cars.forEach(function (car) { car.draw(this.context, carRightImage).move(velocity);});
};

World.prototype.logsDrawMove = function(logs, logImage, velocity) {
  logs.forEach(function(log) {
    log.draw(this.context, logImage).move(velocity);
  });
};

World.prototype.clearCanvas = function() {
    this.context.clearRect(0, 0, this.width, this.height);
};

World.prototype.carCollision = function(cars, frog, resetLocation, livesCount) {
  cars.forEach(function(car) {
    if (frog.x < car.x + car.width - car.width / 2 &&
      frog.x + frog.width - car.width / 2 > car.x &&
      frog.y < car.y + car.height - car.width / 2 &&
      frog.height + frog.y - car.width / 2 > car.y) {
      resetLocation();
      livesCount();
    }
  });
};

World.prototype.winCollision = function(frog, winEvent) {
  if (frog.y < this.block * 2 &&
    ((frog.x > 0 && frog.x < 40) ||
      (frog.x > 105 && frog.x < 145) ||
      (frog.x > 210 && frog.x < 250) ||
      (frog.x > 320 && frog.x < 360) ||
      (frog.x > 425 && frog.x < 465))) {
    winEvent();
  }
};

World.prototype.logCollision = function(frog, logs, velocity) {
  var isDrowning = true;
  logs.forEach(function(log) {
    if (log.direction === 'right') {
      if (frog.x < log.x + log.width - frog.width / 2 &&
        frog.x + frog.width - frog.width / 2 > log.x &&
        frog.y < log.y + log.height &&
        frog.height + frog.y > log.y) {
        frog.x = frog.x + velocity;
        isDrowning = false;
        }
    }
if (log.direction === 'left') {
    if (frog.x < log.x + log.width - frog.width / 2 &&
        frog.x + frog.width - frog.width / 2 > log.x &&
        frog.y < log.y + log.height &&
        frog.height + frog.y > log.y) {
        frog.x = frog.x - velocity;
        isDrowning = false;
        }
    }
  });
  return isDrowning;
};

module.exports = World;
