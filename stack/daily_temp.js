/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (arr) {
  if (arr.length === 1) {
    return [0];
  }
  let n = arr.length;
  let stack = [n - 1];
  let ans = [0];

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans.push(0);
    } else {
      ans.push(stack[stack.length - 1] - i);
    }
    stack.push(i);
  }

  return ans.reverse();
};
