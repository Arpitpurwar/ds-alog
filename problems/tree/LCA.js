function LCA(currentNode, p, q) {
  if (currentNode == null || currrentNode === p || currentNode === q) {
    return currentNode;
  }

  let left = recurseTree(currentNode.left, p, q) 
  let right = recurseTree(currentNode.right, p, q)
  
  if(left == null){
	return right;
  }else if(right === null){
	return left;
  }else{
	return root;
  }
}
