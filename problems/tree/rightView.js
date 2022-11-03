class Node {
  constructor(data) {
    this.leftChild = null;
    this.rightChild = null;
    this.data = data;
  }
}

let rootNode;

function rightView(root){
	if(root === null) {
		return null;
	}

	let queue = [root];

	while(queue.length > 0){
		let size = queue.length;

		while(size--){
			let node = queue[0];
			queue.shift();
			console.log('s',size)
			if(size === 0){
				console.log('Element at right leaf',node.data);
			}

			if (node.leftChild) {
        queue.push(node.leftChild);
      }

			if(node.rightChild){
				queue.push(node.rightChild);
			}
		}
	}
}

rootNode = new Node(1);
rootNode.leftChild = new Node(2);
rootNode.rightChild = new Node(3);
rootNode.leftChild.leftChild = new Node(7);
rootNode.leftChild.rightChild = new Node(6);
rootNode.rightChild.leftChild = new Node(5);
rootNode.rightChild.rightChild = new Node(4);

console.log("ZigZag Order traversal of binary tree is -");
rightView(rootNode);
