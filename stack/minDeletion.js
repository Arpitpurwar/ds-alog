/**
 * @param {string} s
 * @return {number}
 */
//https:// leetcode.com/problems/minimum-deletions-to-make-string-balanced/
 var minimumDeletions = function (s) {
  let res = [];
  let count = 0;
  for (let idx = s.length - 1; idx >= 0; idx--) {
    if (res.length == 0) {
      res.push(s[idx]);
    } else if (res[res.length - 1] == "a" && s[idx] == "b") {
      count += 1;
      res.pop();
    } else {
      res.push(s[idx]);
    }
  }
  return count;
};
