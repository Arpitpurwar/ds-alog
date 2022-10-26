/**
 * @param {string} num
 * @param {number} k
 * @return {string}
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
    if (stack.length > 0 || ch !== "0") {
      stack.push(ch);
    }
  }

  while (stack.length > 0 && k--) {
    stack.pop();
  }

  if (stack.length === 0) {
    return "0";
  }

  console.log(stack);
  return stack.join("");
};
