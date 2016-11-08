var chai = require('chai');
var assert = chai.assert;
var Car = require('../lib/car');

describe('Car', function() {
  var world = {context: 300, width: 500, height: 700 };
  var car = new Car(25, 15, 50, 25, 'right', world);

  it('should be a function', function () {
    assert.isFunction(Car);
  });

  it('should instantiate our good friend, car', function () {
     assert.isObject(car);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    assert.equal(car.x, 25);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    assert.equal(car.y, 15);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function () {
    assert.equal(car.width, 50);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function () {
    assert.equal(car.height, 25);
  });

  it('should take a fifth arguement and set it as the "direction" property of the instantiated object', function () {
    assert.equal(car.direction, 'right');
  });

  it('should take a sixth arguement and set it as the "world" property of the instantiated object', function () {
    assert.equal(car.world, world);
  });

  it('should set a property of context to world.context', function (){
    assert.equal(car.world.context, 300);
  });

  it('draw should be a prototype of Car', function () {
    assert.isFunction(car.draw);
  });

  it('"car.move()" should increment by 1 if direction is right', function () {
    car.move();
    assert.equal(car.x, 26);
  });

  it('"car.move()" should decrement by 1 if direction is left', function () {
    car.direction = "left";
    car.move();
    assert.equal(car.x, 25);
  });

});
