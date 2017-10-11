var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    var maxIdx = size; 
    storage[maxIdx] = value; 
    size++; 
  };

  someInstance.pop = function() {
    if (size > 0) {    
      var maxIdx = Object.keys(storage).length - 1;
      var lastVal = storage[maxIdx];
      delete storage[maxIdx];
      size--;
      return lastVal;
    }
    return;
  };

  someInstance.size = function() {
    return size; 
  };

  return someInstance;
};
