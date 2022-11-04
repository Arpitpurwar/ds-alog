var isValidBST = function (root) {
  return isBST(root, Number.MIN_VALUE, Number.MAX_VALUE);
};
function isBST(node, min, max) {
  if (node == null) return true;
  if (node.val < min || node.val > max) return false;
  return (
    isBST(node.left, min, node.val - 1) && isBST(node.right, node.val + 1, max)
  );
}
