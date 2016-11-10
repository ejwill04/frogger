var chai = require('chai');
var assert = chai.assert;
var World = require('../lib/world');

describe('World', function () {
  var world = new World(context);

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

 it('should have a prototype of winCollision', function () {
   assert.isFunction(world.winCollision);
 });

 it('should have a prototype of logCollision', function () {
   assert.isFunction(world.logCollision);
 });

});
