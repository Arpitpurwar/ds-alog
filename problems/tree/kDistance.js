// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
function distanceK(root, target, k) {
  if (root === null) {
    return [];
  }
  let result = [];
  let parentMap = new Map();
  findParent(parentMap, root);
  let visited = new Map();

  let queue = [target];

  while (queue.length) {
    let size = queue.length;

    while (size--) {
      let node = queue[0];
      queue.shift();
      visited.set(node, true);
      if (k === 0) {
        result.push(node.val);
      }

      if (parentMap.has(node) && !visited.has(parentMap.get(node))) {
        queue.push(parentMap.get(node));
      }

      if (node.left && !visited.has(node.left)) {
        queue.push(node.left);
      }

      if (node.right && !visited.has(node.right)) {
        queue.push(node.right);
      }
    }

    k--;
    if (k < 0) {
      break;
    }
  }

  return result;
}

function findParent(hm, root) {
  if (root == null) {
    return;
  }

  if (root.left) {
    hm.set(root.left, root);
  }

  if (root.right) {
    hm.set(root.right, root);
  }``
  findParent(hm, root.left);
  findParent(hm, root.right);
  return;
}
