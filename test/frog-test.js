var chai = require('chai');
var assert = chai.assert;

var Frog = require('../lib/frog');

describe('Frog', function() {
  var world = {context: 300};
  var frog = new Frog(500, 575, 25, 25, world);


  it('should be a function', function () {
    assert.isFunction(Frog);
  });

  it('should instantiate our good friend, frog', function () {
     assert.isObject(frog);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    assert.equal(frog.x, 500);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    assert.equal(frog.y, 575);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function () {
    assert.equal(frog.width, 25);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function () {
    assert.equal(frog.height, 25);
  });

  it('should take a fifth arguement and set it as the "world" property of the instantiated object', function () {
    assert.equal(frog.world, world);
  });

  it('draw should be a prototype of Car', function () {
    assert.isFunction(frog.draw);
  });

  it('"frog.move()" should increment by 1 if direction is right', function () {
    var frogHopDistance = 10;
    frog.move(frogHopDistance);
    var moveKeyStatus = {right: true};
    document.addEventListener("keydown", true, false);
    assert.equal(frog.x, 510);
  });

  // it('"frog.move()" should decrement by 1 if direction is left', function () {
  //   frog.move();
  //   assert.equal(frog.x, 500);
  // });

});
