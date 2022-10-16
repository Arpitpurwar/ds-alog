// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let sLength = s.length;
  let tLength = t.length;

  if (tLength > sLength) {
    return "";
  }

  let map = new Map();
  for (let char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  let dv = map.size;

  let i = 0;
  let j = 0;
  let min = Number.MAX_VALUE;
  let maxStart = 0;
  let maxEnd = -1;

  while (j < s.length) {
    if (map.has(s[j])) {
      let temp = map.get(s[j]) - 1;
      if (temp === 0) {
        dv--;
      }
      map.set(s[j], temp);
    }

    while (dv === 0) {
      if (map.has(s[i])) {
        let temp = map.get(s[i]) + 1;
        if (temp === 1) {
          if (j - i + 1 < min) {
            maxStart = i;
            maxEnd = j;
            min = j - i + 1;
          }
          dv = 1;
        }
        map.set(s[i], temp);
      }
      i++;
    }
    j++;
  }

  let result = "";
  for (let i = maxStart; i <= maxEnd; i++) {
    result += s[i];
  }

  return result;
};
