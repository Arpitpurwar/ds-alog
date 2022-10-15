/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let n = nums.length;

  if (n === 1) {
    return [-1];
  }
  let stack = [];
  let ans = [];

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length && nums[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(nums[i]);
  }

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    if (stack.length === 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }

    stack.push(nums[i]);
  }

  console.log(stack);
  return ans.reverse();
};



