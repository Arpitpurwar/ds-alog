/**
Reference: https://leetcode.com/problems/kth-largest-element-in-an-array/
Find the kth smallest element in an array of n elements without actually sorting an array.
Expected time complexity: O(nlogk) Expected Space Complexity: O(k)
Example: Input [2,3,45,6,79,1,15]
Output 2
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

var findKthSmallest = function (nums, k) {
  const comparator = (a, b) => {
    return a > b;
  };
  const heap = new Heap(comparator);
  for (let i = 0; i < nums.length; i++) {
    heap.add(nums[i]);
    if (heap.size() > k) {
      heap.poll();
    }
  }

  return heap.peek();
};

let arr = [2, 3, 45, 6, 79, 1, 15];
console.log(findKthSmallest(arr, 2));
