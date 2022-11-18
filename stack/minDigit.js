/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 Given a string S determining a positive number and an integer k, you need to find the minimum possible
digit that can be formed after removing k digits from the strings.
Input:
String = “8973132”
k=5
Output:
12

Time Complexity: O(N)
Space Complexity: O(N)
 */
var removeKdigits = function (num, k) {
  let stack = [];

  for (let ch of num) {
    while (
      stack.length &&
      k &&
      stack[stack.length - 1].charCodeAt(0) > ch.charCodeAt(0)
    ) {
      stack.pop();
      k--;
    }
    // 123045 when k = 2 we need 0 so ans be 1045 in same case k = 3 we
    // do not need 0 so answer would be 45....
    if (stack.length > 0 || ch !== "0") {
      stack.push(ch);
    }
  }
  //  if example is 12345 in this case stack top will never be greater than current element
  while (stack.length > 0 && k--) {
    stack.pop();
  }

  if (stack.length === 0) {
    return "0";
  }

  console.log(stack);
  return stack.join("");
};

console.log(removeKdigits("12345", 2));
