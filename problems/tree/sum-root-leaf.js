function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function sumLeafPaths(root, path, ans) {
  if (root == null) {
    return 0;
  }
  if (root.left == null && root.right == null) {
    path += root.val;
    ans.push(path);
  }
  sumLeafPaths(root.left, path + root.val, ans);
  sumLeafPaths(root.right, path + root.val, ans);
}

var sumNumbers = function (root) {
  let sum = 0;
  let result = [];
  sumLeafPaths(root, "", result);
  sum = result.reduce((acc, red) => {
    return parseInt(acc) + parseInt(red);
  });
  return sum;
};

let p = new TreeNode(1);
let r = new TreeNode(2);
let t = new TreeNode(3);
p.left = r;
p.right = t;
console.log(sumNumbers(p));
