

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Retrive the bucket at hash key
  var bucket = this._storage.get(index); 
  if (!bucket) {
    bucket = [];  
  }
  // If the same key already exists in the bucke
  var includes = false; 
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
  // Replace the value
      bucket[i][1] = v; 
      includes = true; 
    }    
  }
  // Else
  // Push the new tuple to the bucket 
  if (!includes) {
    bucket.push([k, v]); 
  }

  this._storage.set(index, bucket); 
};

HashTable.prototype.retrieve = function(k) {
  // Get key in storage array
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); 
  if (!bucket) {
    return bucket;  
  }
  // Loop through bucket array (for loop)
  for (var i = 0; i < bucket.length; i++) {
    // If tuple has key 
    if (bucket[i][0] === k) {
      // return value. 
      return bucket[i][1];
    }
  } 
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // Loop through bucket array (for loop)
  for (var i = 0; i < bucket.length; i++) {
    // If tuple has key 
    if (bucket[i][0] === k) {
      // delete tuple 
      bucket.splice(i, 1);
    } 
  }
  return; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


