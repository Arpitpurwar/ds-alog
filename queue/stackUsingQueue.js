class StackUsingQueue {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(x) {
    this.q1.push(x);
  }
  pop() {
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    let rv = this.q1.shift();
    while (this.q2.length > 0) {
      this.q1.push(this.q2.shift());
    }
    return rv;
  }
}

let q = new StackUsingQueue();
q.push(10);
q.push(20);
q.push(30);
console.log(q.pop());
console.log(q.pop());
