var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods); 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (this.value === null) {
    this.value = value;
  } else {
    var child = Tree(value); 
    this.children.push(child);
  } 
};

treeMethods.contains = function(target) {
  var result = false;

  var checkTree = function(target, tree) {
    if (tree.value === target) {
      result = true;
    }
    var hasChildren = tree.children.length > 0;
    if (hasChildren) {
      for (var i = 0; i < tree.children.length; i++) {
        checkTree(target, tree.children[i]);
      }
    }
  };
  checkTree(target, this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
