function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(currentArea, maxArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(
  "[1, 8, 6, 2, 5, 4, 8, 3, 7] expects 49 ",
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49
);
console.log(
  "[2, 3, 4, 5, 18, 17, 6] expects 17 ",
  maxArea([2, 3, 4, 5, 18, 17, 6]) === 17
);
