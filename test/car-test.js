var chai = require('chai');
var assert = chai.assert;

var Car = require('../lib/car');

describe('Car', function() {

  it('should be a function', function () {
    assert.isFunction(Car);
  });

  it('should instantiate our good friend, car', function () {
    var canvas = document.getElementById('game');
    var car = new Car(null, null, null, null, null, canvas);
     assert.isObject(car);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var car = new Car(15);
    assert.equal(car.x, 15);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    var car = new Car(15, 30);
    assert.equal(car.y, 30);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function () {
    var car = new Car(15, 30, 50);
    assert.equal(car.width, 50);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function () {
    var car = new Car(15, 30, 50, 80);
    assert.equal(car.height, 80);
  });

  it('should take a fifth arguement and set it as the "direction" property of the instantiated object', function () {
    var car = new Car(15, 30, 50, 80, 'right');
    assert.equal(car.direction, 'right');
  });

  it('should take a sixth arguement and set it as the "canvas" property of the instantiated object', function () {
    var car = new Car(15, 30, 50, 80, 'right');
    assert.equal(car.canvas);
  });

  it.skip('"move()" should increment the "x" property by 1', function () {
    var car = Car(50, 30, 50, 80, 'right');
    this.move();
    assert.equal(car.x, 51);
  });

});
