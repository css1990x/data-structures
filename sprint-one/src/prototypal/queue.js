var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.maxIdx = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.maxIdx] = value;
  this.maxIdx++;
};

queueMethods.dequeue = function() {
  if (Object.keys(this.storage).length > 0) {
    var minIdx = Object.keys(this.storage)[0]; 
    var firstVal = this.storage[minIdx]; 
    delete this.storage[minIdx];
    return firstVal; 
  }
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

