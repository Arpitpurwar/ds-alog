/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  let firstmah = MAH(matrix[0]);
  if (row === 1) {
    return firstmah;
  }
  let ans = firstmah;

  for (i = 1; i < row; i++) {
    for (j = 0; j < col; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = parseInt(matrix[i][j]) + parseInt(matrix[i - 1][j]);
      }
    }
    console.log(matrix[i]);
    let mah = MAH(matrix[i]);
    console.log(mah);
    ans = Math.max(ans, mah);
  }

  return ans;
};

let MAH = function (arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let ans = Number.MIN_VALUE;

  let lme = left(arr);
  let rme = right(arr);
  for (let i = 0; i < arr.length; i++) {
    let temp = rme[i] - lme[i] - 1;
    ans = Math.max(ans, temp * parseInt(arr[i]));
  }
  return ans;
};

function left(arr) {
  let ans = [-1];
  let stack = [0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[stack[stack.length - 1]] < arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (arr[stack[stack.length - 1]] >= arr[i]) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }

      if (stack.length === 0) {
        ans.push(-1);
      } else {
        ans.push(stack[stack.length - 1]);
      }
    }

    stack.push(i);
  }

  return ans;
}

function right(arr) {
  let n = arr.length;
  let ans = [n];
  let stack = [n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (arr[stack[stack.length - 1]] < arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (arr[stack[stack.length - 1]] >= arr[i]) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }

      if (stack.length === 0) {
        ans.push(n);
      } else {
        ans.push(stack[stack.length - 1]);
      }
    }

    stack.push(i);
  }

  return ans.reverse();
}

let mat = [[0,1,1,0,0],[1,1,1,1,1],[1,1,1,1,1],[1,1,0,0,1]]
maximalRectangle(mat);