/**
You have given a matrix of n*n and it is sorted row-wise and column-wise. You have to find the kth
smallest element in the matrix.
Example:
I/P:[[1,5,9],[10,11,13],[12,13,15]], k = 8
O/P: 13
Explanation:[1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
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
}

const kthsmallest = (nums, k) => {
  const minComparator = (a, b) => {
    return a < b;
  };
  let q = new Heap(minComparator);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      q.add(nums[i][j]);
    }
  }

  while (--k > 0) q.poll();

  return q.peek();
};

const arr = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];

const k = 3;

console.log(kthsmallest(arr, k));
