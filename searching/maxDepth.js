/**
 * 
 * @param {*} root 
 * @returns 
We are given the root of a binary tree and we have to write a function named maxDepth which will
return the maximum depth of the binary tree.
Maximum depth of a binary tree is the number of nodes along the longest path from the root node
to the farthest leaf node.
Input:
root = [3,9,20,null,null,15,7]
Output:
3
Example 2:
Input:
root = [1,null,2]
Output:
2

Time Complexity: O(N), as we traverse through each node
Space Complexity: O(1), if recursion is counted as space complexity then O(N)
 */
function maxDepth(root) {
  function dive(node) {
    if (!node) {
      return 0;
    } else {
      return Math.max(dive(node.left), dive(node.right)) + 1;
    }
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
