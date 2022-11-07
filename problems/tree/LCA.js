function LCA(currentNode, p, q) {
  if (currentNode == null || currrentNode === p || currentNode === q) {
    return currentNode;
  }

  let left = LCA(currentNode.left, p, q); 
  let right = LCA(currentNode.right, p, q);
  
  if(left == null){
	return right;
  }else if(right === null){
	return left;
  }else{
	return currentNode;
  }

}
