var longestSubarray = function (nums, limit) {
  let left = 0,
    right = 0,
    max = [],
    min = [],
    num = 0;

  while (right < nums.length) {
    num = nums[right];
    right++;
	console.log("before",num,right,left);
    while (max.length && num > max[max.length - 1]) max.pop();
    while (min.length && num < min[min.length - 1]) min.pop();
    max.push(num);
    min.push(num);
	console.log("before array", max, min);
    if (max[0] - min[0] <= limit){
		continue;
	}
    num = nums[left];
    if (max[0] == num) max.shift();
    if (min[0] == num) min.shift();
    left++;
	console.log("after", num, right, left);
	console.log("after array", max, min);
  }
  return right - left;
};
let nums = [10, 1, 2, 4, 7, 2]; //[8, 2, 4, 7],
  limit = 5 //4;
console.log(longestSubarray(nums, limit));
