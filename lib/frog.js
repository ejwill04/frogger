var Frog = function () {
  // create another object called world
  // have each object receive world so it knows the confines in interact inside of that world

  this.x = (canvas.width/2 - frogSize/2);
  this.y = canvas.height - frogSize;
  this.width = frogSize;
  this.height = frogSize;
};

function moveFrog() {
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  if(moveKeyStatus.right && frog.x < canvas.width-frog.width) {
    frog.x += frogHopDistance;
  }
  else if(moveKeyStatus.left && frog.x > 0) {
    frog.x -= frogHopDistance;
  }
  else if (moveKeyStatus.up && frog.y > 0) {
    frog.y -= frogHopDistance;
  }
  else if(moveKeyStatus.down && frog.y < canvas.height-frog.height){
    frog.y += frogHopDistance;
  }
}

function drawFrog() {
  context.fillRect(frog.x,frog.y,frog.width,frog.height);
}

var moveKeyStatus = {
  right: false,
  left: false,
  up: false,
  down: false,
};

var arrowKeys = {
  right: 39,
  left: 37,
  up: 38,
  down: 40
};


function keyDownHandler(event) {
  if(event.keyCode == arrowKeys.right) {
    moveKeyStatus.right = true;
  }
  else if(event.keyCode == arrowKeys.left) {
    moveKeyStatus.left = true;
  }
  else if(event.keyCode == arrowKeys.down) {
    moveKeyStatus.down = true;
  }
  else if(event.keyCode == arrowKeys.up) {
    moveKeyStatus.up = true;
  }
}

function keyUpHandler(event) {
  if(event.keyCode == arrowKeys.right) {
    moveKeyStatus.right = false;
  }
  else if(event.keyCode == arrowKeys.left) {
    moveKeyStatus.left = false;
  }
  else if(event.keyCode == arrowKeys.down) {
    moveKeyStatus.down = false;
  }
  else if(event.keyCode == arrowKeys.up) {
    moveKeyStatus.up = false;
  }
}
