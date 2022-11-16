/**
Reference: https://leetcode.com/problems/sort-characters-by-frequency/
In an array of n elements with some duplicate values. We have to sort the array in ascending order of the
frequency.
Examples:
Input : [1,2,3,2,3,3,2,3,3,4,4]
Output : [1,4,4,2,2,2,3,3,3,3]

Time Complexity:LO(nlogk)LwhereLnLisLtheLnumberLofLelementsLandLkLisLtheLnumberLofLdistinctLelements.
Space Complexity:LO(k)K
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

var frequencySort = function (nums) {
  const frequency = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in frequency) {
      frequency[nums[i]]++;
    } else {
      frequency[nums[i]] = 1;
    }
  }

  const comparator = (a, b) => {
    return a[1] < b[1];
  };
  const heap = new Heap(comparator);

  for (let key in frequency) {
    heap.add([key, frequency[key]]);
  }

  while (heap.size() > 0) {
    let val = heap.peek();
    console.log(val);
    heap.poll();
    for (let i = 0; i < val[1]; i++) {
      result.push(val[0]);
    }
  }
  return result;
};

let arr = [1, 2, 2, 2, 3, 3, 3, 3, 4];
console.log(frequencySort(arr));
