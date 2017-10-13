

// Instantiate a new graph
var Graph = function() {
  this.graph = {}; 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = [];  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { 
  return Object.keys(this.graph).includes(JSON.stringify(node)); 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {  
  var nodeArr = this.graph[JSON.stringify(node)];
  for (var i = 0; i < nodeArr.length; i++) {
    this.removeEdge(node, nodeArr[i]);
  }
  delete this.graph[JSON.stringify(node)];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if ((this.graph[JSON.stringify(fromNode)] === undefined) || (this.graph[JSON.stringify(toNode)] === undefined)) {
    return false; 
  }
  return (this.graph[JSON.stringify(fromNode)].includes(toNode) && this.graph[JSON.stringify(toNode)].includes(fromNode)); 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[JSON.stringify(fromNode)].push(toNode);
  this.graph[JSON.stringify(toNode)].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  fromNodeArr = this.graph[JSON.stringify(fromNode)];
  toNodeArr = this.graph[JSON.stringify(toNode)];
  var toNodeArrIdx = toNodeArr.indexOf(fromNode);
  var fromNodeArrIdx = fromNodeArr.indexOf(toNode); 
  fromNodeArr.splice(fromNodeArrIdx, 1);
  toNodeArr.splice(toNodeArr, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through each key in graph
  for (var i = 0; i < Object.keys(this.graph).length; i++) {
    var nodeKey = JSON.parse(Object.keys(this.graph)[i]);
    // apply function cb to each node key
    cb.call(this, nodeKey);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


