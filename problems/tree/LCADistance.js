function LCA(currentNode, p, q) {
  if (currentNode == null || currrentNode === p || currentNode === q) {
    return currentNode;
  }

  let left = recurseTree(currentNode.left, p, q);
  let right = recurseTree(currentNode.right, p, q);

  if (left == null) {
    return right;
  } else if (right === null) {
    return left;
  } else {
    return currentNode;
  }
}

function findLevel(root, a, level) {
  if (root == null) {
    return -1;
  }
  if (root.value == a) {
    return level;
  }
  var left = findLevel(root.left, a, level + 1);

  if (left == -1) {
    return findLevel(root.right, a, level + 1);
  }
  return left;
}

function findDistance(root, a, b) {
  var lca = LCA(root, a, b);
  var d1 = findLevel(lca, a, 0);
  var d2 = findLevel(lca, b, 0);

  return d1 + d2;
}
