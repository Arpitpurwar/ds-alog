/**
Given a linked list, you need to reverse the nodes in the linked list for every k group. K is an integer which determine the group size. All the nodes in the group will be reversed.

Input: 
1,2,3,4,5,6,7,8
k=3

Output:
3,2,1,6,5,4,8,7

Explanation:
Group of size 3 for the list 1,2,3,4,5,6,7,8 is 
( 1,2,3 ),(4,5,6) & (7,8) and the reverse of these groups will be:
(3,2,1), (6,5,4) & (8,7)

Expected:
Time Complexity: O(n)
Auxiliary Space Complexity: O(1)

 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = null;
    this.length = 0;
  }
  addNode(node) {
    if (this.head == null) {
      this.head = node;
      return;
    }
    let temp = this.head;
    while (temp.next != null) temp = temp.next;
    temp.next = node;
    this.length += 1;
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

  kReverse(k) {
    let tempStack = [];
    let current = this.head;
    let prev = null;
    while (current != null) {
      let count = 0;
      while (current != null && count < k) {
        tempStack.push(current);
        current = current.next;
        count++;
      }
      while (tempStack.length > 0) {
        if (prev == null) {
          prev = tempStack.pop();
          this.head = prev;
        } else {
          prev.next = tempStack.pop();
          prev = prev.next;
        }
      }
    }
    prev.next = null;
  }
}

let values = [5, 4, 1, 0, -3, -4, -5];
let l1 = new LinkedList();
for (let idx = 0; idx < values.length; idx++) {
  let node = new Node(values[idx]);
  l1.addNode(node);
}
l1.printList();
l1.kReverse(3);
l1.printList();
