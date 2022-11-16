/**
Reference: https://leetcode.com/problems/find-median-from-data-stream/
Problem – You will get an integer every second and you have to return the median immediately for all the
integers that came since time t = 0
Example -
Input - 1
Output - 1 //[1]. So, median is 1.

Input - 2
Output - 1.5 // [1,2]. So, median is (1+2)/2 = 1.5
Input - 5
Output - 2 //[1,2,5]. So, median is 2 only.
Input - 3
Output - 2.5 //[1,2,3,5]. So, median is (2+3)/2 = 2.5

Time Complexity: O(N log N) why we only have to use heapify in both minheap and maxheap n times.
Space Complexity: O(N) as we will store on N elements in our heaps.
 */

class Heap {
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator;
  }

  swap(index1, index2) {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  bottomUp(index) {
    if (index === 0) return;
    const data = this.data;

    const parentIndex = Math.floor((index - 1) / 2);

    if (this.comparator(data[index], data[parentIndex])) {
      this.swap(parentIndex, index);
      this.bottomUp(parentIndex);
    }
  }

  topBottom(index) {
    const n = this.data.length;
    const data = this.data;

    let nextIndexTochoose = index;
    const lefti = index * 2 + 1;
    const righti = lefti + 1;

    if (lefti < n && this.comparator(data[lefti], data[nextIndexTochoose])) {
      nextIndexTochoose = lefti;
    }

    if (righti < n && this.comparator(data[righti], data[nextIndexTochoose])) {
      nextIndexTochoose = righti;
    }

    if (nextIndexTochoose !== index) {
      this.swap(index, nextIndexTochoose);
      this.topBottom(nextIndexTochoose);
    }
  }

  size() {
    return this.data.length;
  }

  peek() {
    if (this.size() <= 0) return null;
    return this.data[0];
  }

  add(val) {
    this.data.push(val);
    this.bottomUp(this.data.length - 1);
  }

  // delete top element
  poll() {
    if (this.size() <= 0) return;

    if (this.size() === 1) {
      this.data.pop();
      return;
    }

    const data = this.data;

    data[0] = data[data.length - 1];
    data.pop();

    this.topBottom(0);
  }
}

class StreamMedian {
  constructor() {
    const minComparator = (a, b) => {
      return a > b;
    };

    const maxComparator = (a, b) => {
      return a < b;
    };
    this.minHeap = new Heap(minComparator);
    this.maxHeap = new Heap(maxComparator);
  }

  addNumber(num) {
    this.maxHeap.add(num);
    this.minHeap.add(this.maxHeap.peek());
    this.maxHeap.poll();
    if (this.maxHeap.size() != this.minHeap.size()) {
      this.maxHeap.add(this.minHeap.peek());
      this.minHeap.poll();
    }
  }

  findMedian() {
    if (this.minHeap.size() == this.maxHeap.size()) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else {
      return this.maxHeap.peek();
    }
  }
}

let streamMedian = new StreamMedian();
streamMedian.addNumber(1);
console.log(streamMedian.findMedian());
streamMedian.addNumber(2);
console.log(streamMedian.findMedian());
streamMedian.addNumber(5);
console.log(streamMedian.findMedian());
streamMedian.addNumber(3);
console.log(streamMedian.findMedian());
streamMedian.addNumber(7);
console.log(streamMedian.findMedian());
streamMedian.addNumber(4);
console.log(streamMedian.findMedian());
