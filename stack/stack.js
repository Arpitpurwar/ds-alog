class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }
  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }
  isEmpty() {
    return this.top === 0;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    this.top = this.top - 1;
    return this.data.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[this.top - 1];
  }
  print() {
    let index = this.top - 1;
    while (index >= 0) {
      console.log(this.data[index]);
      index--;
    }
  }

  insertElementAtBottom(value) {
    if (this.isEmpty()) {
      this.push(value);
      return;
    }
    const tmp = this.peek();
    this.pop();
    this.insertElementAtBottom(value);
    this.push(tmp);
    return;
  }

  reverse() {
    if (!this.isEmpty()) {
      const temp = this.peek();
      this.pop();
      this.reverse();
      this.insertElementAtBottom(temp);
    }
  }
}

const stack = new Stack();
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
stack.insertElementAtBottom(0);
// stack.reverse();
stack.print();


