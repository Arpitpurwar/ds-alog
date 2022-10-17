class QueueUsingStacks {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(x) {
    while (this.s1.length != 0) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(x);
    while (this.s2.length != 0) {
      this.s1.push(this.s2.pop());
    }
  }
  dequeue() {
    return this.s1.pop();
  }
}

let q = new QueueUsingStacks();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.dequeue());
console.log(q.dequeue());
