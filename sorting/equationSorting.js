/**
Problem Statement – Given a sorted array of n numbers. Your task is to apply an equation on each element and after applying, you need to sort it again.
Equation is  A*x*x + B*x + C
Input: [ 1, 2, 3, 5, 6, 7 ], A = -1, B = -2, C = 3
Output -> [ -60, -45, -32, -12, -5, 0]
 * @param {*} arr 
 * @param {*} n 
 * @param {*} A 
 * @param {*} B 
 * @param {*} C 
 */
function sortArray(arr, n, A, B, C) {
  for (let i = 0; i < n; i++){
	arr[i] = A * arr[i] * arr[i] + B * arr[i] + C;
  } 

  let index = -1;
  let maximum = -999999;
  for (let i = 0; i < n; i++) {
    if (maximum < arr[i]) {
      index = i;
      maximum = arr[i];
    }
  }

  let i = 0,
    j = n - 1;
  let new_arr = new Array(n);
  for (let i = 0; i < n; i++) {
    new_arr[i] = 0;
  }
  let k = 0;
  while (i < index && j > index) {
    if (arr[i] < arr[j]) new_arr[k++] = arr[i++];
    else new_arr[k++] = arr[j--];
  }

  while (i < index) new_arr[k++] = arr[i++];
  while (j > index) new_arr[k++] = arr[j--];

  new_arr[n - 1] = maximum;

  for (let p = 0; p < n; p++) arr[p] = new_arr[p];
}

let arr = [1, 2, 3, 5, 6, 7];
let n = arr.length;
let A = -1,
  B = -2,
  C = 3;
sortArray(arr, n, A, B, C);

console.log("Sorted Array");
for (let i = 0; i < n; i++) console.log(arr[i] + " ");
