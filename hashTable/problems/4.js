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

function result(s) {
  let i = -1;
  let j = -1;
  let ans = 0;
  let mp = new Map();
  while (true) {
    let f1 = false;
    let f2 = false;
    // acquiring every character
    while (i < s.length - 1) {
      i++;
      f1 = true;
      if (mp.has(s[i])) {
        let temp = mp.get(s[i]);
        mp.set(s[i], temp + 1);
      } else {
        mp.set(s[i], 1);
      }
      if (mp.get(s[i]) == 2) {
        break;
      } else {
        let len = i - j;
        if (len > ans) {
          ans = len;
        }
      }
    }
    // releasing
    while (j < i) {
      j++;
      f2 = true;
      if (mp.has(s[j])) {
        let temp = mp.get(s[j]);
        mp.set(s[j], temp - 1);
      }
      if (mp.get(s[j]) == 1) {
        break;
      }
    }
    if (f1 == false && f2 == false) {
      break;
    }
  }
  return ans;
}

console.log(result("pwwkew"));
