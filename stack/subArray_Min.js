/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let n = arr.length;
  let M = Math.pow(10, 9) + 7;

  let ple = PLE(arr);
  let nle = NLE(arr);
  console.log(ple, nle);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = (sum + arr[i] * ((i - ple[i]) * (nle[i] - i))) % M;
  }
  return sum;
};

function PLE(arr) {
  let stack = [0];
  let ans = [-1];

  for (let i = 1; i < arr.length; i++) {
    let peak = stack[stack.length - 1];

    if (arr[peak] < arr[i]) {
      ans.push(peak);
    } else if (arr[peak] >= arr[i]) {
      while (stack.length > 0 && arr[peak] >= arr[i]) {
        stack.pop();
        peak = stack[stack.length - 1];
      }
      if (stack.length === 0) {
        ans.push(-1);
      } else if (arr[peak] < arr[i]) {
        ans.push(peak);
      }
    }

    stack.push(i);
  }

  return ans;
}

function NLE(arr) {
  let n = arr.length;
  let stack = [n - 1];
  let ans = [n];

  for (let i = n - 2; i >= 0; i--) {
    if (arr[stack[stack.length - 1]] < arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (arr[stack[stack.length - 1]] >= arr[i]) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans.push(n);
      } else if (arr[stack[stack.length - 1]] <= arr[i]) {
        ans.push(stack[stack.length - 1]);
      }
    }

    stack.push(i);
  }

  return ans.reverse();
}
