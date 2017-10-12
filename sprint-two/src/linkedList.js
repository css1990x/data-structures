// var list  {
//   head: { value: 4 };
//   tail: { value: 5 };
//   addToTail: function,
//   removeHead: function,
//   contains: function,

//   4 : {
//     value: 4
//     next: 5
//   },
//   5 : {
//     value: 5,
//     next: null
//   }
// }


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // if list is empty...
    if (list.head === null) {
      list.head = {};
      list.tail = {}; 
      // Assign value to list.head
      list.head.value = value;
      // Assign value to list.tail
      list.tail.value = value;
      _.extend(list, Node(value));
    } else {
    // else...
      // Store old list tail
      var oldTailVal = list.tail.value; 
      // Add new tail node
      _.extend(list, Node(value));
      list.tail.value = value;
      // Assign new value as old tail's reference
      list[oldTailVal].next = value;
    }
  };

  list.removeHead = function() {
    var currentHead = list.head.value; 
    list.head.value = list[currentHead].next;  
    delete list[currentHead];
    return currentHead; 
  };

  list.contains = function(target) {
    return (list[target] !== undefined);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node[value] = {};
  node[value].value = value; 
  node[value].next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
