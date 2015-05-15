var assert = require('assert');
var tick = require('next-tick');
var when = require('../index');

describe('when', function () {
  it('should callback on next tick', function(done) {
    var met = false;
    var condition = function() { return true; };
    when(condition, function() {
      met = true;
    });
    tick(function () {
      assert(met);
      done();
    });
  });

  it('should keep trying every 10ms', function(done) {
    var met = false;
    var i = 0;
    var condition = function() { return i++, met; };
    when(condition, function() {
      assert(4 === i, 'i was ' + i);
      done();
    });
    setTimeout(function () {
      met = true;
    }, 30);
  });

  it('should accept an interval', function(done) {
    var met = false;
    var i = 0;
    var condition = function() { return i++, met; };
    when(condition, function() {
      assert(2 === i, 'i was ' + i);
      done();
    }, 30);
    setTimeout(function () {
      met = true;
    }, 20);
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
