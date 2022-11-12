/**
 Given an unsorted array of integers, find out the length of the consecutive subsequence of the array. 

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: [1, 2, 3, 4]

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]
TC: O(n)
SC: O(n)
 */
var longestConsecutive = function (arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i] - 1)) {
      map.set(arr[i], false);
    } else {
      map.set(arr[i], true);
    }
    if (map.has(arr[i] + 1)) {
      map.set(arr[i] + 1, false);
    }
  }
  let maxLength = -1;
  let maxStartingNo = 0;
  for (const key of map.keys()) {
    if (map.get(key) == true) {
      let pStartingNo = key;
      let count = 0;
      while (map.has(pStartingNo + count)) {
        count++;
      }
      if (count > maxLength) {
        maxLength = count;
        maxStartingNo = pStartingNo;
      }
    }
  }
  let res = [];
  for (let i = 0; i < maxLength; i++) {
    res.push(maxStartingNo + i);
  }
  return res;
};
