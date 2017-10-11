var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var maxIdx = size; 
    storage[maxIdx] = value; 
    size++; 
  };

  someInstance.dequeue = function() {
    if (Object.keys(storage).length > 0) {
      firstIdx = Object.keys(storage)[0];
      var firstVal = storage[firstIdx];
      delete storage[firstIdx];
      return firstVal;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length; 
  };

  return someInstance;
};
