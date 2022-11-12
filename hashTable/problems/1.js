/*
Given an input string, find out the maximum occurring character in the string and print it. 

Example 1:  
Input: string = “abbfed”
Output: b

Example 2:
Input: string = “wefeqweeq”
Output: e
TC: O(n)
SC: O(n)
*/

let string = "wefeqweeq";
let map = new Map();

for (let i = 0; i < string.length; i++) {
  if (map.has(string[i])) {
    let temp = map.get(string[i]);
    map.set(string[i], temp + 1);
  } else {
    map.set(string[i], 1);
  }
}
let max = -1;
let result = "";

for (const [key, values] of map) {
  if (max < values) {
    max = values;
    result = key;
  }
}

console.log(max, result);
