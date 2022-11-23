function maxLevel(arr, n) {
  arr.sort();

  let output = 1;

  let prev_width = arr[0];
  let prev_count = 1;

  let curr_count = 0;

  let curr_width = 0;
  for (let i = 1; i < n; i++) {
    curr_width += arr[i];
    curr_count += 1;

    if (curr_width > prev_width && curr_count > prev_count) {
      prev_width = curr_width;
      prev_count = curr_count;

      curr_count = 0;
      curr_width = 0;

      output++;
    }
  }

  return output;
}

let arr = [1, 2, 3, 5, 6, 7];
let n = arr.length;
console.log(maxLevel(arr, n));
