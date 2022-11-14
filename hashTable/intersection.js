/**
You are given two integer arrays arr1 and arr2. Populate an array that includes the intersection of arr1 and
arr2.
Remember:
In the resultant array, every element should appear as many times as it is present in both the arrays, including
duplicate elements.
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
 */

function getIntersection(A1, A2) {
  let hash_1 = new Set();
  for (let idx = 0; idx < A2.length; idx++) {
    hash_1.add(A2[idx]);
  }
  for (let idx = 0; idx < A1.length; idx++) {
    if (hash_1.has(A1[idx])) {
      console.log(A1[idx]);
    }
  }
}
let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
getIntersection(nums1, nums2);
nums1 = [1, 2, 2, 1];
nums2 = [2, 2];
getIntersection(nums1, nums2);
