// https://leetcode.com/problems/valid-parentheses/
function validateString(s) {
  //Stack to store the opening bracket
  const openingBrackets = [];
  //Traverse through each character of the string
  for (let idx = 0; idx < s.length; idx++) {
    //Check if left bracket is encountered
    if (s[idx] === "{" || s[idx] === "(" || s[idx] === "[") {
      openingBrackets.push(s[idx]);
    }

    //Else pop the element from the stack after validate the following points
    // 1. check the type of closing bracket
    // 2. check if it is not the last element of the string
    // 3. check if the top most element of the stack is same as the closing bracket
    else if (
      s[idx] === ")" &&
      openingBrackets.length !== 0 &&
      openingBrackets[openingBrackets.length - 1] === "("
    ) {
      openingBrackets.pop();
    } else if (
      s[idx] === "}" &&
      openingBrackets.length !== 0 &&
      openingBrackets[openingBrackets.length - 1] === "{"
    ) {
      openingBrackets.pop();
    } else if (
      s[idx] === "]" &&
      openingBrackets.length !== 0 &&
      openingBrackets[openingBrackets.length - 1] === "["
    ) {
      openingBrackets.pop();
    } else {
      return false;
    }
  }
  return openingBrackets.length === 0;
}
console.log(validateString("(()){}"));
