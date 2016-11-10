var chai = require('chai');
var assert = chai.assert;
var Log = require('../lib/logs');

describe('Log', function() {
  var world = {context: 300, width: 500, height: 700 };
  var velocity = 1.4;
  var log = new Log(25, 15, 50, 25, 'right', world);

  it('should be a function', function () {
    assert.isFunction(Log);
  });

  it('should instantiate our good friend, log', function () {
     assert.isObject(log);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    assert.equal(log.x, 25);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    assert.equal(log.y, 15);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function () {
    assert.equal(log.width, 50);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function () {
    assert.equal(log.height, 25);
  });

  it('should take a fifth arguement and set it as the "direction" property of the instantiated object', function () {
    assert.equal(log.direction, 'right');
  });

  it('should take a sixth arguement and set it as the "world" property of the instantiated object', function () {
    assert.equal(log.world, world);
  });

  it('should set a property of context to world.context', function (){
    assert.equal(log.world.context, 300);
  });

  it('draw should be a prototype of log', function () {
    assert.isFunction(log.draw);
  });

  it('"log.move(velocity)" should increment the x by velocity if direction is right', function () {
    log.move(velocity);
    assert.equal(log.x, 25 + velocity);
  });

  it('"log.move(velocity)" should decrement the x by velocity if direction is left', function () {
    log.direction = "left";
    log.move(velocity);
    assert.equal(log.x, 25);
  });

});
