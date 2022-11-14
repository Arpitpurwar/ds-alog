function minNumDel(A) {
  let count = 0;
  let temp = new Array(A.length);
  for (let idx = 0; idx < A.length; idx++) {
    temp[idx] = 1;
  }
  for (let idx = 1; idx < A.length; idx++) {
    for (let idx_2 = 0; idx_2 < idx; idx_2++) {
      if (A[idx] > A[idx_2] && temp[idx] < temp[idx_2] + 1) {
        temp[idx] = temp[idx_2] + 1;
      }
    }
  }
console.log(temp)
  for (let idx = 0; idx < A.length; idx++) {
    if (count < temp[idx]) {
      count = temp[idx];
    }
  }

  return A.length - count;
}
let arr = [45, 42, 46, 47, 48];
console.log(minNumDel(arr));
