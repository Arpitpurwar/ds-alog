// Q- 1) Problem Statement - Given a binary tree. Your task is to find the height of it. Height is the number
// of nodes present in the longest path of the tree.
class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

let root;

function treeHeight(node) {
  if (node == null) return 0;

  let q = [];

  q.push(node);
  let height = 0;

  while (1 == 1) {
    let nodeCount = q.length;
    if (nodeCount == 0) return height;
    height++;

    while (nodeCount > 0) {
      let newnode = q.shift();
      if (newnode.left != null) q.push(newnode.left);
      if (newnode.right != null) q.push(newnode.right);
      nodeCount--;
    }
  }
}

root = new Node(11);
root.left = new Node(21);
root.right = new Node(13);
root.left.left = new Node(42);
root.left.right = new Node(15);

console.log("Height of tree is " + treeHeight(root));
