var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let ans = new Map();

  for (let i = nums2.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      ans.set(nums2[i], -1);
    }

    if (stack[stack.length - 1] > nums2[i]) {
      ans.set(nums2[i], stack[stack.length - 1]);
    }

    if (stack[stack.length - 1] <= nums2[i]) {
      while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans.set(nums2[i], -1);
      }
      if (stack[stack.length - 1] > nums2[i]) {
        ans.set(nums2[i], stack[stack.length - 1]);
      }
    }
    stack.push(nums2[i]);
  }

  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    result.push(ans.get(nums1[i]));
  }
  return result;
};
