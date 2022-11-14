/**
Given an input string s, find out the longest substring without repeating characters. 

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
TC:
SC:

Ex : abbacbcdbadbdbbdcb
 */

function longestSubString(s) {
  let left = 0;
  let right = 0;
  let length = 0;
  let map = new Map();
  let n = s.length;
  while (right < n) {
    if (map.has(s[right])) {
      let lastIndex = map.get(s[right]);
      left = Math.max(lastIndex + 1, left);
    }
    map.set(s[right], right);
    length = Math.max(right - left + 1, length);
    right++;
  }
  return length;
}

console.log(longestSubString("abcaabcdba"));
