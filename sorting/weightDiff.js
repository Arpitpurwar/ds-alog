/**
Problem Statement – Given an array of n numbers and a number k. Your task is to select k numbers
 from an array such that the absolute difference between selected k numbers and remaining numbers is maximum.
Print the maximum absolute difference as output.

Input: [18, 4, 15, 12, 10 ], K = 3
Output - 31
 */

function maxDifference(array, n, k) {
  array.sort(function (a, b) {
    return a - b;
  });

  let sum = 0,
    sumSmallest = 0,
    sumLargest = 0;

  for (let i = 0; i < n; i++) {
    sum += array[i];
  }

  for (let i = 0; i < k; i++) {
    sumSmallest += array[i];
  }

  for (let i = n - 1; i > n - k - 1; i--) {
    sumLargest += array[i];
  }
  console.log("sumsmallest", sumSmallest);
  console.log("sumLargest", sumLargest);
  console.log("sum", sum);

  return Math.max(
    Math.abs(sumSmallest - (sum - sumSmallest)),
    Math.abs(sumLargest - (sum - sumLargest))
  );
}

let k = 3;
let array = [18, 4, 15, 12, 10];

let n = array.length;

console.log(maxDifference(array, n, k));
