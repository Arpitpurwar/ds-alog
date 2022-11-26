/**
 * 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
Example 2:
Input: nums = [1,2,3,4]
Output: false
Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109

 */
function containsDuplicate(nums) {
  const visitedNums = {}; // {7: true, 2: true}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (visitedNums[num]) {
      return true;
    } else {
      visitedNums[num] = true;
    }
  }

  return false;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(arr1)); //returns false
console.log(containsDuplicate(arr2)); //returns true
