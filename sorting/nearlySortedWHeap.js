/**
Problem Statement – Given an array of n numbers . Each element in the array is at maximum k distance from its actual position. Your task is to sort this kind of array with minimum time, where n = number of elements and k = distance from its actual position.
Input: [19, 18, 17, 14, 70, 60, 50], k = 3

Output - [14, 17, 18, 19, 50, 60, 70]

https://www.geeksforgeeks.org/nearly-sorted-algorithm/
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
      return this.bottomUp(parentIndex);
    }
    return index;
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
      return this.topBottom(nextIndexTochoose);
    }
    return index;
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

  contains(val) {
    return this.data.includes(val);
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

  remove(value) {
    let index = this.data.indexOf(value);
    if (index === this.data.length - 1) {
      return this.data.pop();
    }
    this.data[index] = this.data[this.data.length - 1];
    this.data.pop();
    this.topBottom(this.bottomUp(index));
  }
}

function kSort(arr, n, k) {
  let minComparator = function (a, b) {
    return a < b;
  };
  let priorityQueue = new Heap(minComparator);
  // add first k + 1 items to the min heap
  for (let i = 0; i < k + 1; i++) {
    priorityQueue.add(arr[i]);
  }

  let index = 0;
  for (let i = k + 1; i < n; i++) {
    arr[index++] = priorityQueue.peek(); // arr[0] = 14 --> index=1
    priorityQueue.poll();
    priorityQueue.add(arr[i]);
  }

  while (priorityQueue.size() != 0) {
    arr[index++] = priorityQueue.peek();
    priorityQueue.poll();
  }
}

// A utility function to print the array
function printArray(arr, n) {
  for (let i = 0; i < n; i++) {
    console.log(arr[i] + " ");
  }
}

let k = 3;
let arr = [2, 6, 3, 12, 56, 8];
let n = arr.length;
kSort(arr, n, k);
console.log("Following is sorted array<br>");
printArray(arr, n);
