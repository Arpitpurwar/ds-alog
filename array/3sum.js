const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length-2; i++) {
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    if (i> 0 && nums[i] === nums[i-1]) {
      continue;
    }

    while (left < right) {
      const currSum = nums[left] + nums[right];
      if (currSum === target) {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (currSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};

// tests
console.log("threeSum([2, 0, 1, -1]) returns [[-1, 0, 1]]");
console.log(threeSum([2, 0, 1, -1]));

console.log("No duplicate results returned");
console.log(
  "threeSum([-1, 0, 1, 2, -1, -4]) returns [ [-1, 0, 1], [-1, -1, 2] ]"
);
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
