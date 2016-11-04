var chai = require('chai');
var assert = chai.assert;

var Car = require('../lib/world');

describe('World', function () {

  it('should be a function', function () {
    assert.isFunction(World);
  });

  it('should instantiate an object', function () {
    var world = new World();
    assert.isObject(world);
  });

  it('should take take the first argument and set it as the "width" property of the instantiated object', function () {
    var world = new World(15);
    assert.equal(world.width, 15);
  });

  it('should take take the second argument and set it as the "height" property of the instantiated object', function () {
    var world = new World(15, 20);
    assert.equal(world.height, 20);
  });

  it('should have a "blocks" property, which starts out as an empty array', function () {
    var world = new World(100, 100);
    assert.isArray(world.blocks);
    assert.deepEqual(world.blocks, []);
  });

});
