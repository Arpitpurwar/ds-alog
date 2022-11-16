/***
Reference: https://leetcode.com/problems/merge-k-sorted-lists/
Given a 2 D array consists of sorted rows. You have to combine all the arrays in 1 sorted array.n
n
Input: n
arr[][] = { {1, 3, 5, 7}, n
{2, 4, 6, 8}, n
{0, 9, 10, 11}} ;n
Output: 0 1 2 3 4 5 6 7 8 9 10 11

Time Compleity: O(nlogk)n
Space Compleity: O(k)
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

var mergeKSortedArrays = (arr, k) => {
  const comparator = (a, b) => {
    return a[0] < b[0];
  };
  const heap = new Heap(comparator);

  for (let i = 0; i < arr.length; i++) {
    heap.add([arr[i][0], i, 1]);
  }

  let result = [];

  for (let i = 0; i < arr.length * arr[0].length; i++) {
    let root = heap.peek();
    heap.poll();
    result.push(root[0]);
    // here first value in heap...is telling the matrix value, 2nd value is tellimg
    // which row and 3rd value is telling..which next index to pick..
    if (root[2] < arr[root[1]].length)
      // that is why last value should not be greater to that row length;
      heap.add([arr[root[1]][root[2]], root[1], root[2] + 1]);
  }

  return result;
};

let arr = [
  [1, 3, 5, 7],
  [2, 4, 6, 8],
  [0, 9, 10, 11],
];
console.log(mergeKSortedArrays(arr));
