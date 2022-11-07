let i = 0;
function isLeaf(pre, min, max, from) {
  console.log("pre", i, pre[i], min, max, from);
  let n = preorder.length;
  if (i >= n) {
    return false;
  }

  if (pre[i] > min && pre[i] < max) {
    i++;
    console.log("middle", i, pre[i], min, max, from);
    let left = isLeaf(pre, min, pre[i - 1], "left");
    let right = isLeaf(pre, pre[i - 1], max, "right");
    console.log("end", i, pre[i], min, max, from);
    if (!left && !right) {
      console.log(pre[i - 1] + " ");
    }
    return true;
  }
  return false;
}

function findLeafNodes(preorder) {
  isLeaf(preorder, Number.MIN_VALUE, Number.MAX_VALUE, "main");
}
let preorder = [890, 325, 290, 530, 965];
findLeafNodes(preorder);
