var Car = require("./car.js");
var Frog = require("./frog.js");
var Log = require("./logs.js");
var World = require("./world.js");
var UserInput = require("./user-input.js");

var frogImage = document.getElementById('frog-image');
var carRightImage = document.getElementById('car-right-image');
var logImage = document.getElementById('log-image');
var livesImage = document.getElementById('lives-image');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var lives = 3;
var cars = [];
var logs = [];
var isDrowning = true;
var velocity = 1;
var level = 1;

var userInput = new UserInput();
userInput.initializeArrowEventListeners();
var world = new World(context);
var frog = new Frog(world.width / 2, world.bottom, world.block, world.block, world);
canvas.width = world.width;
canvas.height = world.height;

$(document).ready(function() {
  welcomeScreen();
  updateLevelCounter();
  updateLivesCounter();
});

$('#start-button').on('click', function() {
  initiateGameScreen();
  requestAnimationFrame(function gameLoop() {
    world.clearCanvas();
    world.carsDrawMove(cars, carRightImage, velocity);
    world.logsDrawMove(logs, logImage, velocity);
    frog.draw(context, frogImage);
    frog.move(userInput.keyStatus);
    world.carCollision(cars, frog, resetLocation, livesCount);
    isDrowning = world.logCollision(frog, logs, velocity);
    world.winCollision(frog, winEvent);
    deathByWater();
    requestAnimationFrame(gameLoop);
  });
});

for (var i = 1; i < 5; i++) {
  x = 200 * i;
  logs.push(new Log(x, world.block * 2, world.block, world.block, 'left', world));
}

for (var i = 1; i < 5; i++) {
  x = -100 * i;
  logs.push(new Log(x, world.block * 3, world.block, world.block, 'right', world));
}

for (var i = 1; i < 4; i++) {
  x = 200 * i;
  logs.push(new Log(x, world.block * 4, world.block * 2, world.block, 'left', world));
}

for (var i = 1; i < 5; i++) {
  x = 100 * i;
  logs.push(new Log(x, world.block * 5, world.block, world.block, 'right', world));
}

for (var i = 1; i < 6; i++) {
  x = 100 * i;
  logs.push(new Log(x, world.block * 6, world.block, world.block, 'left', world));
}

for (var i = 1; i < 3; i++) {
  x = 200 * i;
  cars.push(new Car(x, world.block * 8 - 8, world.block, world.block, 'left', world));
}

for (var i = 1; i < 4; i++) {
  x = -200 * i;
  cars.push(new Car(x, world.block * 9 - 8, world.block, world.block, 'right', world));
}

for (var i = 1; i < 3; i++) {
  x = 300 * i;
  cars.push(new Car(x, world.block * 10 - 8, world.block, world.block, 'left', world));
}

for (var i = 1; i < 4; i++) {
  x = 150 * i;
  cars.push(new Car(x, world.block * 11 - 8, world.block, world.block, 'right', world));
}

for (var i = 1; i < 3; i++) {
  x = 200 * i;
  cars.push(new Car(x, world.block * 12 - 8, world.block, world.block, 'left', world));
}

function resetLocation() {
  frog.x = world.width / 2;
  frog.y = world.bottom;
}

function livesCount () {
  --lives;
  updateLivesCounter();
  if (lives > 0) {
    lostLife();
  }
  else {
    deathScreen();
    restartGame();
  }
}

function deathByWater () {
  if ((frog.y < world.block * 7) && isDrowning) {
    resetLocation();
    livesCount();
  }
  else {
    isDrowning = true;
  }
}

function updateLivesCounter() {
  $('#lives-counter').html(lives);
}

function levelCounter() {
  level++;
  updateLevelCounter();
}

function updateLevelCounter() {
  $('#level-counter').html(level);

}

function increaseVelocity(){
  velocity = velocity * 1.4;
}

function winEvent() {
  isDrowning = false;
  increaseVelocity();
  resetLocation();
  levelCounter();
  levelUp();
}

function levelUp(){
  $("#level-up").show();
  $("#death-screen").hide();
  $("#winning-screen").hide();
  $("#game-screen").hide();
  $("#lost-life").hide();
  spaceBarEvent();
}

function spaceBarEvent (e) {
  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      initiateGameScreen();
    }
  };
}

function initiateGameScreen() {
  $('#game-screen').show();
  $('#welcome-screen').hide();
  $('#death-screen').hide();
  $("#level-up").hide();
  $("#lost-life").hide();
}

function welcomeScreen() {
  $('#welcome-screen').show();
  $('#game-screen').hide();
  $('#death-screen').hide();
  $("#level-up").hide();
  $("#lost-life").hide();
}

$("#restart-game-button").on("click", function() {
  restartGame();
  initiateGameScreen();
});

$("#game-screen-button").on("click", function() {
  restartGame();
  initiateGameScreen();
});

function restartGame() {
  lives = 3;
  level = 1;
  velocity = 1;
  updateLivesCounter();
  updateLevelCounter();
}

function lostLife(){
  $("#lost-life").show();
  $("#lost-life").hide();
  $("#level-up").hide();
  $("#death-screen").hide();
  $("#winning-screen").hide();
  $("#game-screen").show();
}

function deathScreen() {
  $("#death-screen").show();
  $("#winning-screen").hide();
  $("#game-screen").hide();
  $("#level-up").hide();
  $("#lost-life").hide();
}
