var chai = require('chai');
var assert = chai.assert;
var UserInput = require('../lib/user-input');

describe('UserInput', function() {
  var world = {context: 300, width: 500, height: 700 };
  var userInput = new UserInput();

  it('should be a function', function () {
    assert.isFunction(UserInput);
  });

  it('should have a property of userInput.keyStatus.right', function (){
    assert.equal(userInput.keyStatus.right, false);
  });

  it('userInput should be a prototype of initializeArrowEventListeners', function () {
    assert.isFunction(userInput.initializeArrowEventListeners);
  });

  it('userInput should be a prototype of keyDownHandler', function () {
    assert.isFunction(userInput.keyDownHandler);
  });

  it('keyUpHandler should change keyStatus.right to true when arrow key right is key downed', function () {
    userInput.arrow.right = true;
    assert.equal(userInput.keyStatus.right, false);
  });

  it('userInput should be a prototype of keyUpHandler', function () {
    assert.isFunction(userInput.keyUpHandler);
  });

  it('keyDownHandler should change keyStatus.left to false when arrow key right is key upped', function () {
    userInput.arrow.left = true;
    assert.equal(userInput.keyStatus.left, false);
  });

});
