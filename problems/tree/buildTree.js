var buildTree = function (preorder, inorder) {
  return construct(
    preorder,
    inorder,
    0,
    preorder.length - 1,
    0,
    inorder.length - 1
  );
};
function construct(pre, ino, plo, phi, ilo, ihi) {
  if (plo > phi || ilo > ihi) {
    return null;
  }
  let newNode = new TreeNode();
  newNode.val = pre[plo];
  let elementFound = -1;
  for (let i = ilo; i <= ihi; i++) {
    if (pre[plo] == ino[i]) {
     elementFound = i;
      break;
    }
  }
  let numbersLeft = elementFound - ilo;
  newNode.left = construct(
    pre,
    ino,
    plo + 1,
    plo + numbersLeft,
    ilo,
    elementFound - 1
  );
  newNode.right = construct(
    pre,
    ino,
    plo + numbersLeft + 1,
    phi,
    elementFound + 1,
    ihi
  );
  return newnode;
}
