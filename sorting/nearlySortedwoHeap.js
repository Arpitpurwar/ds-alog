/**
Problem Statement – Given an array of n numbers . Each element in the array is at maximum k distance from its actual position. Your task is to sort this kind of array with minimum time, where n = number of elements and k = distance from its actual position.
Input: [19, 18, 17, 14, 70, 60, 50], k = 3

Output - [14, 17, 18, 19, 50, 60, 70]

https://www.geeksforgeeks.org/nearly-sorted-algorithm/
 */

function kSort(arr, n, k) {
  let priorityQueue = [];
  // add first k + 1 items to the min heap
  for (let i = 0; i < k + 1; i++) {
    priorityQueue.push(arr[i]);
  }
  priorityQueue.sort(function (a, b) {
    return a - b;
  });

  let index = 0;
  for (let i = k + 1; i < n; i++) {
    arr[index++] = priorityQueue[0];
    priorityQueue.shift();
    priorityQueue.push(arr[i]);
    priorityQueue.sort(function (a, b) {
      return a - b;
    });
  }

  while (priorityQueue.length != 0) {
    arr[index++] = priorityQueue[0];
    priorityQueue.shift();
  }
}

// A utility function to print the array
function printArray(arr, n) {
  for (let i = 0; i < n; i++) {
    console.log(arr[i] + " ");
  }
}

let k = 3;
let arr = [2, 6, 3, 12, 56, 8];
let n = arr.length;
kSort(arr, n, k);
console.log("Following is sorted array<br>");
printArray(arr, n);