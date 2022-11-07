let pre = 0;
var bstToGst = function (root) {
  if (root.right != null) bstToGst(root.right);
  pre = root.val = pre + root.val;
  if (root.left != null) bstToGst(root.left);
  return root;
};
