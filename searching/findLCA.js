/**
 * 
We are given a binary search tree (BST), where we have to find the lowest common ancestor of two given nodes from the BST. 
Common definition of LCA is: “The lowest common ancestor is a node which is a common ancestor to both the nodes, here the node itself can also be considered as common ancestor”


Time Complexity: O(N), worst case we traverse through each node
Space
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 
6

Input: 
root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2

Constraints:
 
The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.

 Complexity: O(1) We always node regardless of the size of BST.

 */
function lowestCommonAncestor(root, p, q) {
  const pVal = p.val; // 10
  const qVal = q.val; // 14

  let currentNode = root; // 8 -> 10

  while (currentNode) {
    const currentVal = currentNode.val; // 8 -> 10

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
