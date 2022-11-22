/**
Stack Permutation - A Stack Permutation is defined as converting a queue to another queue such that we can only apply Stack Operations on the input array.
Problem Statement - Given two queues. Your task is to check if we can convert one queue to another queue using Stacks permutation.
Below rules can only be followed - 
The dequeue operation can be applied on the input queue
Push and Pop operations of Stack
Stack used and Input queue must be empty at the end
Enqueue is allowed to the output queue

Input - [4,5,6],  [5,4,6]

Output - True

Time Complexity – 
If the number of elements in the input queue is n then, the time complexity will be O(n)

Space Complexity – 
If the number of elements in the input queue is n then, the space complexity will be O(n)

 */
function stackPermutation(ip, op, n) {
  let input = [];
  for (let i = 0; i < n; i++) {
    input.push(ip[i]);
  }
  let output = [];
  for (let i = 0; i < n; i++) {
    output.push(op[i]);
  }
  
  let tempStack = [];
  while (input.length != 0) {
    let ele = input.shift(); // 4,5
    if (ele == output[0]) {
      output.shift(); // 5
      while (tempStack.length != 0) {
        if (tempStack[tempStack.length - 1] == output[0]) {
          tempStack.pop();
          output.shift();
        } else break;
      }
    } else {
      tempStack.push(ele);
    }
  }
  return input.length == 0 && tempStack.length == 0;
}

let input = [4, 5, 6];

let output = [4, 5, 6];
let n = 3;
if (stackPermutation(input, output, n)) console.log("True");
else console.log("False");
