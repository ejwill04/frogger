var chai = require('chai');
var assert = chai.assert;

var Frog = require('../lib/frog');

describe('Frog', function() {
  var world = {context: 300, width: 500, height: 700};
  var frog = new Frog(250, 400, 50, 50, world);


  it('should be a function', function () {
    assert.isFunction(Frog);
  });

  it('should instantiate our good friend, frog', function () {
     assert.isObject(frog);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    assert.equal(frog.x, 250);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    assert.equal(frog.y, 400);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function () {
    assert.equal(frog.width, 50);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function () {
    assert.equal(frog.height, 50);
  });

  it('should take a fifth arguement and set it as the "world" property of the instantiated object', function () {
    assert.equal(frog.world, world);
  });

  it('draw should be a prototype of Frog', function () {
    assert.isFunction(frog.draw);
  });

  it('"frog.move()" should decrement y by gameBlock if direction is up', function () {
    var keyStatus = {up: true};
    var gameBlock = 50;
    frog.move(gameBlock, keyStatus);
    assert.equal(frog.y, 350);
  });

  it('"frog.move()" should decrement x by gameBlock if direction is left', function () {
    var keyStatus = {left: true};
    var gameBlock = 50;
    frog.move(gameBlock, keyStatus);
    assert.equal(frog.x, 200);
  });

  it('"frog.move()" should increment x by gameBlock if direction is right', function () {
    var keyStatus = {right: true};
    var gameBlock = 50;
    frog.move(gameBlock, keyStatus);
    assert.equal(frog.x, 250);
  });

  it('"frog.move()" should increment y by gameBlock if direction is down', function () {
    var keyStatus = {down: true};
    var gameBlock = 50;
    frog.move(gameBlock, keyStatus);
    assert.equal(frog.y, 400);
  });

});
