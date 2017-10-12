var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {}; 
  someInstance.counter = 0; 
  return someInstance; 
};

stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value; 
  this.counter++; 
};

stackMethods.size = function() {
  return this.counter; 
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    var maxidx = this.counter - 1; 
    var lastval = this.storage[maxidx]; 
    delete this.storage[maxidx];  
    this.counter--; 
    return lastval; 
  }
};

