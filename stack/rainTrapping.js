/**
 * Given the list of integer indicating the height of walls you need to find the max volume of water that can be stored between them whenever it rains.
Note: the width of the wall is 1
https://leetcode.com/problems/trapping-rain-water/
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Input: height = [4,2,0,3,2,5]
Output: 9

Ex - 3 0 0 2 0 4
 */

function maxStorage(height) {
  let stack = [];
  let maxUnit = 0;
  for (let i = 0; i < height.length; i++) {
    while (stack.length != 0 && height[stack[stack.length - 1]] < height[i]) {
      let last_element = height[stack.pop()];
      if (stack.length == 0) break;
      let distance = i - stack[stack.length - 1] - 1;
      let min_height =
        Math.min(height[stack[stack.length - 1]], height[i]) - last_element;
      maxUnit += distance * min_height;
    }
    stack.push(i);
  }
  return maxUnit;
}
let walls = [3,0,0,2,0,4];
console.log(maxStorage(walls));
