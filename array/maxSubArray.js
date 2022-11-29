// 4,3,-2,6,-14,7,-1,4,5,7,-10,2,9,-10,-5,-9,6,1
function maxSubArray(nums) {
  let csum = nums[0];
  let osum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (csum > 0) {
      csum += nums[i];
    } else {
      csum = nums[i];
    }

    if (csum > osum) {
      osum = csum;
    }
  }

  return osum;
}

// tests
console.log(
  "[-2,1,-3,4,-1,2,1,-5,4] expects 6",
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6
);
