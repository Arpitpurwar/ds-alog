class Node {
  consturctor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

var isSameTree = function (p, q) {
  if (p && q) {
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }
  return !p && !q;
};

let p = new Node(0);
let q = new Node(0);
let r = new Node(1);
let s = new Node(1);
let t = new Node(2);
let u = new Node(2);
let v = new Node(3);
let w = new Node(3);
let x = new Node(4);
let y = new Node(4);
let z = new Node(5);
let a = new Node(5);
p.left = r;
r.left = t;
t.left = v;
v.left = x;
x.right = z;
q.left = s;
s.left = u;
u.left = w;
w.left = y;
y.right = a;
console.log(isSameTree(p, q));
