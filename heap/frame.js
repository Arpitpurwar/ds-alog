/**
1. You have an array. And a frame of length x. You have to slide that frame on the array and find the
median in each frame.
I/P: nums = [1,3,-1,-3,5,3,6,7], x = 3
O/P: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
Explanation:
[1 3 -1] -3 5 3 6 7 1
1 [3 -1 -3] 5 3 6 7 -1
1 3 [-1 -3 5] 3 6 7 -1
1 3 -1 [-3 5 3] 6 7 3
1 3 -1 -3 [5 3 6] 7 5
1 3 -1 -3 5 [3 6 7] 6
https://leetcode.com/problems/sliding-window-median/
https://leetcode.com/problems/sliding-window-median/discuss/478904/JavaScript-2-Heaps-and-Binary-Search-2-approaches
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


const medianSlidingWindow = (nums, k) => {
  const minComparator = (a, b) => {
    return a < b;
  };
  const maxComparator = (a, b) => {
    return a > b;
  };
  let max = new Heap(maxComparator);
  let min = new Heap(minComparator);
  let ans = new Array(nums.length - k + 1).fill(0);

  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(ans, nums[i]);
    if (max.size() == 0 || max.peek() >= nums[i]) {
      max.add(nums[i]);
    } else {
      min.add(nums[i]);
    }
    console.log("BEE", i, max.data, min.data);
    if (max.size() - min.size() > 1) {
      let temp = max.peek();
      max.poll();
      min.add(temp);
    }
    if (min.size() > max.size()) {
      let temp = min.peek();
      min.poll();
      max.add(temp);
    }
    console.log("after", i, max.data, min.data);
    if (i - k + 1 >= 0) {
      if (k % 2 == 0) {
        ans[j] = max.peek() / 2.0 + min.peek() / 2.0;
      } else {
        ans[j] = max.peek();
      }
      j++;
      if (max.contains(nums[i - k + 1])) {
        max.poll(nums[i - k + 1]);
      } else {
        min.poll(nums[i - k + 1]);
      }
    }
  }
  return ans;
};

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const x = 3;

console.log(medianSlidingWindow(arr, x));
