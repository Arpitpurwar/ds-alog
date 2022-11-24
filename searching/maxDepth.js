function maxDepth(root) {
  function dive(node) {
    if (!node) {
      return 0;
    } else return Math.max(dive(node.left), dive(node.right)) + 1;
  }

  return dive(root);
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) {
        return;
      }
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }
}

console.log("Works for Binary Trees of with 1, 2, and 3 levels.");
const BST = new BinarySearchTree();
BST.insert(8);
console.log(maxDepth(BST.root) === 1);
BST.insert(3);
BST.insert(10);
console.log(maxDepth(BST.root) === 2);
BST.insert(14);
//          8
//        /   \
//       3     10
//      / \      \
//               14
console.log(maxDepth(BST.root) === 3);

console.log("Works for Binary Tree with 0 levels");
const BST2 = new BinarySearchTree();
console.log(maxDepth(BST2.root) === 0);
