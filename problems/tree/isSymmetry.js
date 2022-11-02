var isSymmetric = function(root) {
	return isMirror(root, root);
};
function isMirror( t1, t2) {
	if (t1 == null && t2 == null) return true;
	if (t1 == null || t2 == null) return false;
	return (t1.val == t2.val)
	&& isMirror(t1.right, t2.left)
	&& isMirror(t1.left, t2.right);
};


let p = new Node(0);
let q = new Node(0);

console.log(isSymmetric(p));