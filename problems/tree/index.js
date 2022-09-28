
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
}

const tree = new BSTree();
tree.insert(15);
tree.insert(7);
tree.insert(21);
const r = tree.insert(2);
tree.inorderWithRecursion()
console.log(r)