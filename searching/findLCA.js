function lowestCommonAncestor(root, p, q) {
  const pVal = p.val;
  const qVal = q.val;

  let currentNode = root;

  while (currentNode) {
    const currentVal = currentNode.val;

    if (currentVal < pVal && currentVal < qVal) {
      currentNode = currentNode.right;
    } else if (currentVal > pVal && currentVal > qVal) {
      currentNode = currentNode.left;
    } else {
      return currentNode;
    }
  }
}

class Node {
  constructor(value) {
    this.val = value;
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
      if (value === current.val) {
        return;
      }
      if (value < current.val) {
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
  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.val) {
        return current;
      }
      current = value < current.val ? current.left : current.right;
    }
    return false;
  }
}

const BST = new BinarySearchTree();
BST.insert(8);
BST.insert(3);
BST.insert(10);
BST.insert(1);
BST.insert(6);
BST.insert(14);
//          8
//        /   \
//       3     10
//      / \      \
//     1   6     14
const node3 = BST.find(3);
const node10 = BST.find(10);
const node14 = BST.find(14);

console.log(lowestCommonAncestor(BST.root, node3, node10) === BST.root);
console.log(lowestCommonAncestor(BST.root, node10, node14) === node10);
