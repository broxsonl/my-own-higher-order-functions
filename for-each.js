'use strict';

const testArray = ['Bob', 'Mary', 'Lee', 'Snake', 'Jimbob'];

Array.prototype._forEach = function(callback) {

  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};
