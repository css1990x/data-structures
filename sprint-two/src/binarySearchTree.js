var BinarySearchTree = function(value) {
  var someInstance = Object.create(bstPrototype);
  someInstance._tree = {};
  someInstance.value = value; // Initial value
  someInstance.left = null;
  someInstance.right = null;
  return someInstance; 
};

var bstPrototype = {};

bstPrototype.insert = function(value) { 
  // BASE CASES 
  if (this.value === value) {
    return; 
  }
  if ((this.value < value) && (this.right === null)) {
    this.right = BinarySearchTree(value); 
    // 
  } 
  if ((this.value > value) && (this.left === null)) {
    // var newNode = BinarySearchTree(value);  
    this.left = BinarySearchTree(value);
  }
  // RECURSIVE CASES 
  if ((this.value < value) && (this.right !== null)) { 
    this.right.insert(value);
  }
  // if node > value && node.left != null; 
  if ((this.value > value) && (this.left !== null)) {
    // node.left.insert(value); 
    this.left.insert(value);
  } 
};

bstPrototype.contains = function(value) {
  var val = value; 
  // Base case
  // If the node = value
  if (this.value === val) {
    return true; 
  }
  // If the node is less than value, and there's no right node
  if ((this.value < val) && (this.right === null)) {
    return false;
  // If the node is greater than value, and there's no left node
  } 
  if ((this.value > val) && (this.left === null)) {
    return false;
  } 
  // Recursive case
  // If the node is less than value
  if (this.value < val) {
    // return Re-run with right node
    return this.right.contains(value);
  }
  // If the node is greater than value
  if (this.value > val) {
    return this.left.contains(value); 
  }
};

bstPrototype.depthFirstLog = function(cb) {
  // Run cb on node we're on
  cb.call(null, this.value);

  // Base case
  // If we're at the bottom of a branch
  if ((this.right === null) && (this.left === null)) {
    return;
  }

  // Recursive case
  // If there's a left branch,
  if (this.left !== null) {
    // Run depthFirstLog on left branch
    this.left.depthFirstLog(cb);
  }

  // If there's a right branch,
  if (this.right !== null) {
    // Run depthFirstLog on right branch 
    this.right.depthFirstLog(cb);   
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
