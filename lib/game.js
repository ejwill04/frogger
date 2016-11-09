var Car = require("./car.js");
var Frog = require("./frog.js");
var Log = require("./logs.js");
var World = require("./world.js");
var UserInput = require("./user-input.js");

var frogImage = document.getElementById('frog-image');
var carRightImage = document.getElementById('car-right-image');
var logImage = document.getElementById('log-image');

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
var gameBlock = world.height/14;
var frog = new Frog(world.width/2, world.height - gameBlock, gameBlock, gameBlock, world);
canvas.width = world.width;
canvas.height = world.height;

welcomeScreen();
updateLevelCounter();
updateLivesCounter();

requestAnimationFrame(function gameLoop() {
  world.clearCanvas();
  world.carsDrawMove(cars, carRightImage, velocity);
  world.logsDrawMove(logs, logImage, velocity);
  frog.draw(context, frogImage);
  frog.move(gameBlock, userInput.keyStatus);
  world.carCollision(cars, frog, resetLocation, livesCount);
  isDrowning = world.logCollision(frog, logs, velocity);
  world.winCollision(frog, gameBlock, winEvent);
  deathByWater();
  requestAnimationFrame(gameLoop);
});

for (var i = 1; i < 5; i++) {
  x = 200 * i;
  logs.push(new Log(x, gameBlock * 2, gameBlock, gameBlock, 'left', world));
}

for (var i = 1; i < 5; i++) {
  x = -100 * i;
  logs.push(new Log(x, gameBlock * 3, gameBlock, gameBlock, 'right', world));
}

for (var i = 1; i < 4; i++) {
  x = 200 * i;
  logs.push(new Log(x, gameBlock * 4, gameBlock * 2, gameBlock, 'left', world));
}

for (var i = 1; i < 5; i++) {
  x = 100 * i;
  logs.push(new Log(x, gameBlock * 5, gameBlock, gameBlock, 'right', world));
}

for (var i = 1; i < 6; i++) {
  x = 100 * i;
  logs.push(new Log(x, gameBlock * 6, gameBlock, gameBlock, 'left', world));
}

for (var i = 1; i < 3; i++) {
  x = 200 * i;
  cars.push(new Car(x, gameBlock * 8 - 8, gameBlock, gameBlock, 'left', world));
}

for (var i = 1; i < 4; i++) {
  x = -200 * i;
  cars.push(new Car(x, gameBlock * 9 - 8, gameBlock, gameBlock, 'right', world));
}

for (var i = 1; i < 3; i++) {
  x = 300 * i;
  cars.push(new Car(x, gameBlock * 10 - 8, gameBlock, gameBlock, 'left', world));
}

for (var i = 1; i < 4; i++) {
  x = 150 * i;
  cars.push(new Car(x, gameBlock * 11 - 8, gameBlock, gameBlock, 'right', world));
}

for (var i = 1; i < 3; i++) {
  x = 200 * i;
  cars.push(new Car(x, gameBlock * 12 - 8, gameBlock, gameBlock, 'left', world));
}

$('#start-button').on('click', function() {
  initiateGame();
});

function welcomeScreen () {
  $('#welcome-screen').show();
  $('#game-screen').hide();
}

function initiateGame () {
  $('#welcome-screen').hide();
  $('#game-screen').show();
}

function resetLocation() {
  frog.x = world.width/2;
  frog.y = world.height - gameBlock;
}

function livesCount () {
  --lives;
  updateLivesCounter();
  if(lives === 0) {
    gameOver();
  }
}

function deathByWater () {
  if ((frog.y < gameBlock * 7) && isDrowning) {
    resetLocation();
    livesCount();
  }
  else {
    isDrowning = true;
  }
  //is this else statement necessary?
}

function updateLivesCounter () {
  $('#lives-counter').html(lives);
}

function levelCounter () {
  level++;
  updateLevelCounter();
}

function updateLevelCounter () {
  $('#level-counter').html(level);
}

function gameOver() {
  alert('game over');
  location.reload();
}

function increaseVelocity(){
  velocity = velocity * 1.4;
}

function winEvent() {
  isDrowning = false;
  increaseVelocity();
  alert('winning');
  resetLocation();
  levelCounter();
}

// function pausecomp(ms) {
// ms += new Date().getTime();
// while (new Date() < ms){}
// }
//
// setTimeout(function() {alert('hello');},1250);
