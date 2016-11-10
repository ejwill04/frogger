function UserInput () {
  this.keyStatus = {right: false, left: false, up: false, down: false};
  this.arrow = {right: 39, left: 37, up: 38, down: 40};
}

UserInput.prototype.initializeArrowEventListeners = function() {
  document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
  document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
};

UserInput.prototype.keyDownHandler = function(event) {
  if(event.keyCode == this.arrow.right) {
    event.preventDefault();
    this.keyStatus.right = true;
  } else if(event.keyCode == this.arrow.left) {
    event.preventDefault();
    this.keyStatus.left = true;
  } else if(event.keyCode == this.arrow.down) {
    event.preventDefault();
    this.keyStatus.down = true;
  } else if(event.keyCode == this.arrow.up) {
    event.preventDefault();
    this.keyStatus.up = true;
  }
};

UserInput.prototype.keyUpHandler = function(event) {
  if(event.keyCode == this.arrow.right) {
    this.keyStatus.right = false;
  } else if(event.keyCode == this.arrow.left) {
    this.keyStatus.left = false;
  } else if(event.keyCode == this.arrow.down) {
    this.keyStatus.down = false;
  } else if(event.keyCode == this.arrow.up) {
    this.keyStatus.up = false;
  }
};

module.exports = UserInput;
