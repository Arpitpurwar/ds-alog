var input = [3, 4, 1, 5, 4, 2, 3, 2, 1, -1, -1];

function findSingleOccurence(input) {
  let ans = 0;
  //store xor of all the elements in ans
  for (let i = 0; i < input.length; i++) {
    console.log("B", ans, input[i]);
    ans = ans ^ input[i];
    console.log("A", ans);
  }
  return ans;
}

let output = findSingleOccurence(input);
console.log(output);
