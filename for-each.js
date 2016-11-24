'use strict';

const testArray = ['Bob', 'Mary', 'Lee', 'Snake', 'Jimbob'];

Array.prototype._forEach = function(callback) {

  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};

// Simply console logging the array
testArray._forEach( item => {
  console.log(item);
});

// Splitting the array
testArray._forEach( item => {
  let newArray = item.split('');
  console.log(newArray);
  return newArray;
});
