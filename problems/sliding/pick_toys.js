// https://leetcode.com/problems/fruit-into-baskets/

var totalFruit = function (fruits) {
  let k = 2;
  let ans = Number.MIN_VALUE;
  let map = new Map();

  let i = 0;
  let j = 0;

  while (j < fruits.length) {
    if (map.has(fruits[j])) {
      map.set(fruits[j], map.get(fruits[j]) + 1);
    } else {
      map.set(fruits[j], 1);
    }
    if (map.size > k) {
      while (map.size > k) {
        let temp = map.get(fruits[i]) - 1;
        if (temp === 0) {
          map.delete(fruits[i]);
        } else {
          map.set(fruits[i], temp);
        }
        i++;
      }
    }

    if (map.size >= 1) {
      ans = Math.max(ans, j - i + 1);
    }
    j++;
  }

  return ans;
};
