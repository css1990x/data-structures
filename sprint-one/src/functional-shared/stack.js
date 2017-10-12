var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.lastIdx = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  // Implement the methods below
  push : function(value) {
    var maxIdx = this.lastIdx; 
    this.storage[maxIdx] = value; 
    this.lastIdx++; 
  },

  pop : function() {
    if (this.lastIdx > 0) {    
      var maxIdx = Object.keys(this.storage).length - 1;
      var lastVal = this.storage[maxIdx];
      delete this.storage[maxIdx];
      this.lastIdx--;
      return lastVal;
    }
    return;
  },

  size : function() {
    return this.lastIdx; 
  }
};

