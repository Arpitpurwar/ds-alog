class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  insert(value = null) {
    if (!Number.isInteger(value)) {
      return "please insert values like integer ex - 2,3,4,5,";
    }

    const currentNode = this.root;

    if (!currentNode) {
      const newNode = new TreeNode(value);
      this.root = newNode;
    } else {
      function traverseAndAddNode(node) {
        if (node.value < value) {
          if (!node.right) {
            return (node.right = new TreeNode(value));
          } else {
            return traverseAndAddNode(node.right);
          }
        } else {
          if (!node.left) {
            return (node.left = new TreeNode(value));
          } else {
            return traverseAndAddNode(node.left);
          }
        }
      }
      traverseAndAddNode(this.root);
    }

    return this.root;
  }

  inorderWithRecursion() {
    const currentNode = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      console.log(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(currentNode);
  }

  inorderWithIteration() {
    let currentNode = this.root;
    const stack = [];
    while (currentNode || stack.length > 0) {
      if (currentNode) {
        queue.push(currentNode);
        currentNode = currentNode.left;
      } else {
        currentNode = stack.pop();
        console.log(currentNode.value);
        currentNode = currentNode.right;
      }
    }
  }

  preorderWithIteration() {
    let stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();
      console.log(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }

  isValidBST() {
    let currentNode = this.root;
    let queue = [];
    let prev = null;
    while (currentNode || queue.length > 0) {
      if (currentNode) {
        queue.push(currentNode);
        currentNode = currentNode.left;
      } else {
        currentNode = queue.pop();
        if (prev != null && prev.value > currentNode.value) {
          return false;
        }
        console.log("IsValodBST", currentNode.value);
        prev = currentNode;
        currentNode = currentNode.right;
      }
    }

    return true;
  }

  BFS() {
    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let node = queue.shift();
      console.log("BFS", node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  /**
   * 1.1 Create an empty stack
	2.1 Do following while root is not NULL
	    a) Push root's right child and then root to stack.
	    b) Set root as root's left child.
	2.2 Pop an item from stack and set it as root.
	    a) If the popped item has a right child and the right child 
	       is at top of stack, then remove the right child from stack,
	       push the root back and set root as root's right child.
	    b) Else print root's data and set root as NULL.
	2.3 Repeat steps 2.1 and 2.2 while stack is not empty.
   */
  postOrderWithIteration() {
    let S = [];
    let list = [];
    S.push(this.root);
    let prev = null;
    while (S.length != 0) {
      let current = S[S.length - 1];

      /* go down the tree in search of a leaf an if so process it
            and pop stack otherwise move down */
      if (prev == null || prev.left == current || prev.right == current) {
        if (current.left != null) S.push(current.left);
        else if (current.right != null) S.push(current.right);
        else {
          S.pop();
          list.push(current.data);
        }

        /* go up the tree from left node, if the child is right
                push it onto stack otherwise process parent and pop
                stack */
      } else if (current.left == prev) {
        if (current.right != null) S.push(current.right);
        else {
          S.pop();
          list.push(current.data);
        }

        /* go up the tree from right node and after coming back
                from right node process parent and pop stack */
      } else if (current.right == prev) {
        S.pop();
        list.push(current.data);
      }

      prev = current;
    }

    return list;
  }

  findKey() {
    let node = this.root;
    if (node == null) return false;
    if (node.data == key) return true;
    var left = find(node.left, key);
    var right = find(node.right, key);
    return left || right;
  }

  height() {
    let node = this.root;
    if (node == null) return -1;
    var left = height(node.left);
    var right = height(node.right);
    return Math.max(left, right) + 1;
  }
}

const tree = new BSTree();
tree.insert(15);
tree.insert(7);
tree.insert(10);
tree.insert(8);
tree.insert(21);
tree.insert(2);
//tree.preorderWithIteration()
tree.BFS();
//tree.inorderWithRecursion()
//tree.inorderWithIteration()
const s = tree.isValidBST();
// console.log(s)
