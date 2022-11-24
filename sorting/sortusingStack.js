/**
Problem Statement - Given an array. Your task is to sort it using Stack.
For example – 

Input – [2, 4, 1, 12, 14, 25, 35]

Output – [1, 2, 4, 12, 14, 25, 35]
 */

function sort(input) {
  var tmpStack = [];

  while (input.length != 0) {
    var tmp = input[input.length - 1];
    input.pop();

    while (tmpStack.length != 0 && tmpStack[tmpStack.length - 1] < tmp) {
      input.push(tmpStack[tmpStack.length - 1]);
      tmpStack.pop();
    }

    tmpStack.push(tmp);
  }

  return tmpStack;
}

function sortArrayUsingStacks(arr, n) {
  var input = [];
  for (var i = 0; i < n; i++) input.push(arr[i]);

  var tmpStack = sort(input);

  for (var i = 0; i < n; i++) {
    arr[i] = tmpStack[tmpStack.length - 1];
    tmpStack.pop();
  }
}

var arr = [10, 15, 35, 45];
var n = arr.length;
sortArrayUsingStacks(arr, n);
for (var i = 0; i < n; i++) console.log(arr[i] + " ");
