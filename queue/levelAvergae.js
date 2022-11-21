/**
Time Complexity – 
If the number of nodes in the input tree is n then, the time complexity will be O(n)

Space Complexity – 
If the number of nodes in the input tree is n then, the space complexity will be O(n) 

 */

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.val = data;
  }
}

function average(root) {
  let q = [];
  q.push(root);
  while (q.length > 0) {
    let sum = 0;
    let count = 0;
    let size = q.length;
    while (size-- > 0) {
      let n = q[0];
      q.shift();
      sum += n.val;
      count++;
      if (n.left != null) q.push(n.left);
      if (n.right != null) q.push(n.right);
    }
    console.log((sum * 1.0) / count + " ");
  }
}

function newNode(data) {
  let temp = new Node(data);
  return temp;
}

let root = null;
root = newNode(120);
root.left = newNode(18);
root.right = newNode(22);
root.left.left = newNode(13);
root.left.right = newNode(35);
root.right.right = newNode(21);

console.log("Averages of levels : ");
average(root);
