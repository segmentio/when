/**
 * Module dependencies.
 */

var assert = require('assert');
var sinon = require('sinon');
var when = require('../index');

/**
 * Tests.
 */

describe('when', function () {
  var clock;

  before(function() {
    clock = sinon.useFakeTimers();
  });

  after(function() {
    clock.restore();
  });

  it('should callback on next tick', function() {
    var callback = sinon.spy();
    var condition = function() { return true; };
    when(condition, callback);

    clock.tick();
    assert(callback.calledOnce);
  });

  it('should keep trying every 10ms', function() {
    var condition = sinon.spy();
    when(condition, function() {});

    for (var i = 1; i <= 10; i += 1) {
      assert.equal(condition.callCount, i);
      clock.tick(10);
    }
  });

  it('should accept an interval', function() {
    var callback = sinon.spy();
    when(callback, function() {}, 30);

    for (var i = 1; i <= 10; i += 1) {
      assert.equal(callback.callCount, i);
      clock.tick(30);
    }
  });

  it('should throw an error when passed a non-function `condition` value', function() {
    assert.throws(function() {
      when(1, function() {});
    });
  });

  it('should throw an error when passed a non-function `cb` value', function() {
    assert.throws(function() {
      when(function() {}, 'xyz');
    });
  });
});
