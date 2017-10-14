

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Retrive the bucket at hash key
  var bucket = this._storage.get(index) || []; 
  // If the same key already exists in the bucke
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
  // Replace the value
      bucket[i][1] = v; 
    }    
  }
  // Else
  // Push the new tuple to the bucket 
  bucket.push([k, v]); 

  this._storage.set(index, bucket);
  this._count++;  
  if (this._count > (this._limit * 0.75)) {

    this.double(this._limit * 2);
  }
  return undefined; 
};

HashTable.prototype.retrieve = function(k) {
  // Get key in storage array
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || []; 
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
  var bucket = this._storage.get(index) || [];
  // Loop through bucket array (for loop)
  for (var i = 0; i < bucket.length; i++) {
    // If tuple has key 
    if (bucket[i][0] === k) {
      // delete tuple 
      bucket.splice(i, 1);
      this._count--;
      //if (this.size < (this._limit * 0.25)) {
      //}
    } 
  }
  
  //HashTable.prototype.halve(); 
  return undefined; 
};

HashTable.prototype.double = function(newLimit) {
  // Copy storage in new var copy
  var dup = this._storage;  // 8 indices
  var lim = this._limit; 

  newLimit = Math.max(newLimit, 8);
  if (newLimit === lim) { return; }

  // Redeclare storage with length of 16 (i.e. wipe out original storage) 
  this._limit = newLimit; 
  this._storage = LimitedArray(this._limit);
  this._count = 0; 
  
  // Iterate through copy. Each index...
  dup.each(function(bucket) {
    // Each tuple
    if (bucket === undefined) { return; }
    for (var j = 0; j < bucket.length; j++) {
        // Insert into storage
      this.insert(bucket[j][0], bucket[j][1]);
    }   
  }.bind(this));
};
    

HashTable.prototype.halve = function() {
  // check if limit is less than 16. 
    // return; 
  // check if count is less than limit / 4
    // if so, create a separate, duplicate hashtable with a limit that equals limit / 2; 
    // iterate through original storage array
      // iterate through the bucket at each index, get elements 
        // run elements through new storage array via insert function 
      //
    //
  //
// overwrite original storage array with duplicate 
}; 
/*
 * Complexity: What is the time complexity of the above functions?
 */


