var chai = require('chai');
var assert = chai.assert;

var Log = require('../lib/logs');

describe('Log', function() {

  it('should be a function', function () {
    assert.isFunction(Log);
  });

  it('should instantiate our good friend, logs', function () {
    var canvas = document.getElementById('game');
    var logs = new Log(null, null, null, null, null, canvas);
     assert.isObject(logs);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var logs = new Log(15);
    assert.equal(logs.x, 15);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    var logs = new Log(15, 30);
    assert.equal(logs.y, 30);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function () {
    var logs = new Log(15, 30, 50);
    assert.equal(logs.width, 50);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function () {
    var logs = new Log(15, 30, 50, 80);
    assert.equal(logs.height, 80);
  });

  it('should take a fifth arguement and set it as the "direction" property of the instantiated object', function () {
    var logs = new Log(15, 30, 50, 80, 'right');
    assert.equal(logs.direction, 'right');
  });

  it('should take a sixth arguement and set it as the "canvas" property of the instantiated object', function () {
    var logs = new Log(15, 30, 50, 80, 'right');
    assert.equal(logs.canvas);
  });

  it.skip('"move()" should increment the "x" property by 1', function () {
    var logs = Log(50, 30, 50, 80, 'right');
    this.move();
    assert.equal(logs.x, 51);
  });

});
