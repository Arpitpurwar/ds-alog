const reverseQueueFirstKElements = (k) => {
  if (queue.length == 0 || k > queue.length) return;
  if (k <= 0) return;

  let stack = [];

  for (let i = 0; i < k; i++) {
    stack.push(queue[0]);
    queue.shift();
  }

  while (stack.length > 0) {
    queue.push(stack[stack.length - 1]);
    stack.pop();
  }
  for (let i = 0; i < queue.length - k; i++) {
    queue.push(queue[0]);
    queue.shift();
  }
};

let queue = [];
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(50);
queue.push(60);
queue.push(70);
queue.push(80);
queue.push(90);
queue.push(100);

let k = 5;
console.log("before =>", queue);
reverseQueueFirstKElements(k);
console.log("after =>", queue);
