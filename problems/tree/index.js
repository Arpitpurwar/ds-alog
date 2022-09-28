
class TreeNode{
	constructor(value, left = null, right = null){
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

class BSTree {
	constructor(){
		this.root = null
	}

	insert(value = null){
		if(!Number.isInteger(value)){
			return 'please insert values like integer ex - 2,3,4,5,'
		}

		const currentNode = this.root;

		if(!currentNode){
			const newNode = new TreeNode(value);
			this.root = newNode;
		}else{
			function traverseAndAddNode(node){
				if(node.value < value){
					if(!node.right){
						return node.right = new TreeNode(value);
					}else{
						return traverseAndAddNode(node.right)
					}
				}else{
					if(!node.left){
						return node.left = new TreeNode(value);
					}
					else{
						return traverseAndAddNode(node.left)
					}
				}
			}
			traverseAndAddNode(this.root)
		}

		return this.root;
	}

	inorderWithRecursion(){
		const currentNode = this.root;
			function traverse(node){
				if(node.left){
					traverse(node.left)
				}
				console.log(node.value);
				if(node.right){
					traverse(node.right)
				}
			}
		traverse(currentNode)
	}

	inorderWithIteration(){
		let currentNode = this.root;
		const queue = [];
		while(currentNode || queue.length > 0 ){
			if(currentNode){
				queue.push(currentNode);
				currentNode = currentNode.left;
			}
			else{
				currentNode = queue.pop();
				console.log(currentNode.value);
				currentNode = currentNode.right;
			}
		}
	}

	isValidBST(){
		let currentNode = this.root;
		let queue = [];
		let prev = null;
		while(currentNode || queue.length > 0){
			if(currentNode){
				queue.push(currentNode);
				currentNode = currentNode.left;
			}else{
				currentNode = queue.pop();
				if(prev != null && prev.value > currentNode.value){
					return false
				}
				console.log(currentNode.value);
				prev = currentNode;
				currentNode = currentNode.right;
			}
		}

		return true;
	}
}

const tree = new BSTree();
tree.insert(15);
tree.insert(7);
tree.insert(10);
tree.insert(8);
tree.insert(21);
const r = tree.insert(2);
//tree.inorderWithRecursion()
//tree.inorderWithIteration()
const s = tree.isValidBST()
console.log(s)