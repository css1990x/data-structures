var Queue = function() {
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length; 
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.counter] = val; 
  this.counter++; 
}; 

Queue.prototype.dequeue = function() {
  if (Object.keys(this.storage).length > 0) {
    var firstIdx = Object.keys(this.storage)[0];
    var firstVal = this.storage[firstIdx];
    delete this.storage[firstIdx];
    return firstVal;   
  }
};


