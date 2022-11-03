// Q - Problem Statement - Given a binary tree. Your task is to print tree nodes in a zigzag manner.

class Node {
  constructor(data) {
    this.leftChild = null;
    this.rightChild = null;
    this.data = data;
  }
}

let rootNode;

function printZigZag() {
  if (rootNode == null) {
    return;
  }

  let currentLevel = [];
  let nextLevel = [];

  currentLevel.push(rootNode);
  let leftToRight = true;

  while (currentLevel.length > 0) {
    let node = currentLevel.pop();

    console.log(node.data + " ");

    if (leftToRight) {
      if (node.leftChild != null) {
        nextLevel.push(node.leftChild);
      }

      if (node.rightChild != null) {
        nextLevel.push(node.rightChild);
      }
    } else {
      if (node.rightChild != null) {
        nextLevel.push(node.rightChild);
      }

      if (node.leftChild != null) {
        nextLevel.push(node.leftChild);
      }
    }

    if (currentLevel.length == 0) {
      leftToRight = !leftToRight;
      let temp = currentLevel;
      currentLevel = nextLevel;
      nextLevel = temp;
    }
  }
}

function printZigZagQueue() {
  if (rootNode == null) {
    return;
  }

  let currentLevel = [];
  let ans = []

  currentLevel.push(rootNode);
  let leftToRight = true;

  while (currentLevel.length > 0) {
    
    let size = currentLevel.length;
  
    let levelAnswer = [];
    
    for(let i = 0; i< size; i++){
      let node = currentLevel[0];
      currentLevel.shift();
      if(leftToRight){
        levelAnswer[i] = node.data;
      }else{
        levelAnswer[size-i-1] = node.data;
      }

      if (node.leftChild != null) {
        currentLevel.push(node.leftChild);
      }

      if (node.rightChild != null) {
        currentLevel.push(node.rightChild);
      }
    }
    
    leftToRight = !leftToRight;
    ans.push(levelAnswer);
  }
  return ans;
}

rootNode = new Node(1);
rootNode.leftChild = new Node(2);
rootNode.rightChild = new Node(3);
rootNode.leftChild.leftChild = new Node(7);
rootNode.leftChild.rightChild = new Node(6);
rootNode.rightChild.leftChild = new Node(5);
rootNode.rightChild.rightChild = new Node(4);

console.log("ZigZag Order traversal of binary tree is -");
console.log(printZigZagQueue());
