var chai = require('chai');
var assert = chai.assert;
var World = require('../lib/world');
var Car = require('../lib/car');

describe('World', function () {
  var world = new World(context);
  var lives = 3;
  function livesCount () {
    --lives;
    // updateLivesCounter();
    if(lives === 0) {
      // deathScreen();
    }
  }

  it('should be a function', function () {
    assert.isFunction(World);
  });

  it('should instantiate an object', function () {
    assert.isObject(world);
  });

  it('should take take the first argument and set it as the "width" property of the instantiated object', function () {
    assert.equal(world.width, 500);
  });

  it('should take take the second argument and set it as the "height" property of the instantiated object', function () {
    assert.equal(world.height, 700);
  });

 it('should have a prototype of carsDrawMove', function () {
   assert.isFunction(world.carsDrawMove);
 });

 it('should have a prototype of logsDrawMove', function () {
   assert.isFunction(world.logsDrawMove);
 });

 it('should have a prototype of clearCanvas', function () {
   assert.isFunction(world.clearCanvas);
 });

 it('should have a prototype of carCollision', function () {
   assert.isFunction(world.carCollision);
 });

 it('carCollision should have a collision', function () {
   var frog = (25, 25, 20, 20, 'world');
   var cars = [];
   cars.push(new Car(25, 50 * 12 - 8, 50, 50, 'left', 'world'));
   assert.equal(lives, 3);
   world.carCollision(cars, frog, 'resetlocation', 'livesCount');
   livesCount();
   assert.equal(lives, 2);
 });

 it('carCollision should not have a collision', function () {
   var frog = (300, 325, 20, 20, 'world');
   var cars = [];
   cars.push(new Car(25, 50 * 12 - 8, 50, 50, 'left', 'world'));
   assert.equal(lives, 2);
   world.carCollision(cars, frog, 'resetlocation', 'livesCount');
   assert.equal(lives, 2);
 });

 it('should have a prototype of winCollision', function () {
   assert.isFunction(world.winCollision);
 });

 it('should have a prototype of logCollision', function () {
   assert.isFunction(world.logCollision);
 });

});
