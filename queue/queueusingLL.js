class QNode {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

let front = null,
rear = null;

function enqueue(key) {
  let temp = new QNode(key);

  if (rear == null) {
    front = rear = temp;
    return;
  }

  rear.next = temp;
  rear = temp;
}

function dequeue() {
  if (front == null) return;

  let temp = front;
  front = front.next;

  if (front == null) rear = null;
}

enqueue(110);
enqueue(220);
dequeue();
dequeue();
enqueue(310);
enqueue(410);
enqueue(510);
dequeue();
document.write("Queue Front : " + front.key + "<br>");
document.write("Queue Rear : " + rear.key + "<br>");
