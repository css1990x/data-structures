var Queue = function() {
  var someInstance = {}; 
  someInstance.storage = {}; 
  someInstance.count = 0; 
  _.extend(someInstance, queueMethods);
  return someInstance; 
};

var queueMethods = {
  
  enqueue: function(value) {
    var maxIdx = this.count;
    this.storage[maxIdx] = value; 
    this.count++; 
  },
  dequeue: function() {
    if (Object.keys(this.storage).length > 0) {
      var firstIdx = Object.keys(this.storage)[0]; 
      var firstVal = this.storage[firstIdx]; 
      delete this.storage[firstIdx];
      return firstVal; 
    }
  }, 

  size: function() {
    return Object.keys(this.storage).length; 
  }




};


