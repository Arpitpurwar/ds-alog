class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
var binarySearchTree = function () {
var tree = Object.create(binarySearchTreeMethods);
tree.root = null;
return tree;
};

var binarySearchTreeMethods = {
  insert: function (value, node) {
    var newNode = Node(value);
    // check if tree is empty
    if (this.isEmpty()) {
      this.root = newNode;
      return;
    }
    // initialize node
    if (node === void 0) node = this.root;
    // compare value with node.value
    if (value <= node.value) {
      // check if left exists
      if (node.left) {
        this.insert(value, node.left);
      } else {
        node.left = newNode;
      }
    } else {
      if (node.right) {
        this.insert(value, node.right);
      } else {
        node.right = newNode;
      }
    }
  },
  remove: function (value) {
    this.root = this._removeInner(value, this.root);
  },
  _removeInner: function (value, node) {
    if (node) {
      if (value < node.value) {
        node.left = this._removeInner(value, node.left);
      } else if (value > node.value) {
        node.right = this._removeInner(value, node.right);
      } else if (node.left && node.right) {
        node.value = this.findMinValue(node.right);
        node.right = this._removeInner(node.value, node.right);
      } else {
        node = node.left || node.right;
      }
    }
    return node;
  },
};