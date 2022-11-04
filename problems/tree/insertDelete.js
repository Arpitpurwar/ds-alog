class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}

let root;
let temp = root;

function inorder(temp) {
  if (temp == null) return;

  inorder(temp.left);
  console.log(temp.key + " ");
  inorder(temp.right);
}

function deleteDeepest(root, delNode) {
  let q = [];
  q.push(root);

  let temp = null;

  while (q.length > 0) {
    temp = q[0];
    q.shift();

    if (temp == delNode) {
      temp = null;
      return;
    }
    if (temp.right != null) {
      if (temp.right == delNode) {
        temp.right = null;
        return;
      } else q.push(temp.right);
    }

    if (temp.left != null) {
      if (temp.left == delNode) {
        temp.left = null;
        return;
      } else q.push(temp.left);
    }
  }
}
function Delete(root, key) {
  if (root == null) return;

  if (root.left == null && root.right == null) {
    if (root.key == key) {
      root = null;
      return;
    } else return;
  }

  let q = [];
  q.push(root);
  let temp = null,
    keyNode = null;

  while (q.length > 0) {
    temp = q[0];
    q.shift();

    if (temp.key == key) keyNode = temp;

    if (temp.left != null) q.push(temp.left);

    if (temp.right != null) q.push(temp.right);
  }

  if (keyNode != null) {
    let x = temp.key;
    deleteDeepest(root, temp);
    keyNode.key = x;
  }
}

function efficientDelete(root, key) {
  if (root === null) {
    return;
  }

  if (root.left == null && root.right == null) {
    if (root.key == key) {
      root = null;
      return;
    } else return;
  }

  let currNode = null;
  let keyNode = null;
  let pr = null;
  let pl = null;

  let queue = [root];

  while (queue.length) {
    currNode = queue[0];
    queue.shift();

    if (currNode.key === key) {
      keyNode = currNode;
    }

    if (currNode.left) {
      queue.push(currNode.left);
      pl = currNode;
    }

    if (currNode.right) {
      queue.push(currNode.right);
      pr = currNode;
    }
  }

  if (keyNode) {
    keyNode.key = currNode.key;
    if (pr.right.key === currNode.key) {
      pr.right = null;
      return root;
    }
    if (pl.left.key === currNode.key) {
      pl.left = null;
      return root;
    }
  }
}

function efficientDeletewithOneParent(root, key) {
  if (root === null) {
    return;
  }

  if (root.left == null && root.right == null) {
    if (root.key == key) {
      root = null;
      return;
    } else return;
  }

  let currNode = null;
  let keyNode = null;
  let p = null;

  let queue = [root];

  while (queue.length) {
    currNode = queue[0];
    queue.shift();

    if (currNode.key === key) {
      keyNode = currNode;
    }

    if (currNode.left) {
      queue.push(currNode.left);
      p = currNode;
    }

    if (currNode.right) {
      queue.push(currNode.right);
      p = currNode;
    }
  }

  if (keyNode) {
    keyNode.key = currNode.key;
    if (p.right.key === currNode.key) {
      p.right = null;
      return root;
    }
    if (p.left.key === currNode.key) {
      p.left = null;
      return root;
    }
  }
}

root = new Node(10);
root.left = new Node(11);
root.left.left = new Node(7);
root.left.right = new Node(12);
root.right = new Node(9);
root.right.left = new Node(15);
root.right.right = new Node(8);

console.log("Inorder traversal " + "before deletion : ");
inorder(root);

let key = 10;
efficientDelete(root, key);

console.log("Inorder traversal " + "after deletion : ");
inorder(root);

class TreeNode {
  constructor(val, left, right = null) {
    this.val = val;
    this.left = null;
  }
}
