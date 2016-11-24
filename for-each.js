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

// Splitting and reversing the array
testArray._forEach( item => {
  let newArray = item.split('').reverse();
  console.log(newArray);
  return newArray;
});

// Adding the #1 to each item
testArray._forEach( item => {
  let newArray = [];
  newArray.push(item + 1);
  console.log(newArray);
  return newArray;
});
