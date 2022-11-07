let arr = [];
function findPath(root, arr, x) {
  if (root == null) return false;
  arr.push(root.data);
  if (root.data == x) return true;
  if (hasPath(root.left, arr, x) || hasPath(root.right, arr, x)) return true;
  arr.pop();
  return false;
}
