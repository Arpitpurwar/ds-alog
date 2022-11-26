/**
In XOR rules are same bits return zero and different bits return 1..
Based on properties of XOR
1)XOR of a number with itself returns 0
	Eg: 3 XOR 3 = 0
2)XOR of a number with 0 return the number itself
	Eg: 3 XOR 0 = 3

Time Complexity: O(N), as we traverse through each node
Space Complexity: O(1).

 */
var input = [3, 4, 1, 5, 4, 2, 3, 2, 1, -1, -1];

function findSingleOccurence(input) {
  let ans = 0;
  //store xor of all the elements in ans
  for (let i = 0; i < input.length; i++) {
    ans = ans ^ input[i];
  }
  return ans;
}

let output = findSingleOccurence(input);
console.log(output);
