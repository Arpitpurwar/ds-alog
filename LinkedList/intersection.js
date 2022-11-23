class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = null;
  }
  addNode(node) {
    if (this.head == null) {
      this.head = node;
      return;
    }
    let temp = this.head;
    while (temp.next != null) temp = temp.next;
    temp.next = node;
  }
  printList() {
    let data = [];
    let temp = this.head;
    while (temp != null) {
      data.push(temp.data);
      temp = temp.next;
    }
    console.log(...data);
  }
}

function isPresent(head, data) {
  let temp = head;
  while (temp != null) {
    if (temp.data == data) return true;
    temp = temp.next;
  }
  return false;
}

function getIntersection(head1, head2, result) {
  let temp = head1;
  while (temp != null) {
    if (isPresent(head2, temp.data)) {
      let node = new Node(temp.data);
      result.addNode(node);
    }
    temp = temp.next;
  }
}
values = [1, 5, 8, 9, 12];
values2 = [1, 4, 5, 6, 7, 9, 10, 12];
let l1 = new LinkedList();
let l2 = new LinkedList();
let result = new LinkedList();
for (let idx = 0; idx < values.length; idx++) {
  let node = new Node(values[idx]);
  l1.addNode(node);
}
for (let idx = 0; idx < values2.length; idx++) {
  let node = new Node(values2[idx]);
  l2.addNode(node);
}
getIntersection(l1.head, l2.head, result);
result.printList();
