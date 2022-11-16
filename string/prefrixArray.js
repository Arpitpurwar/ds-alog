function createAux(W) {
  // initializing the array aux with 0's
  let aux = [0];

  // for index 0, it will always be 0
  // so starting from index 1
  let i = 1;
  //  m can also be viewed as index of first mismatch
  let m = 0;
  while (i < W.length) {
    //  prefix = suffix till m-1
    if (W[i] == W[m]) {
      m += 1;
      aux[i] = m;
      i += 1;
    }
    //  this one is a little tricky,
    // when there is a mismatch,
    // we will check the index of previous
    //  possible prefix.
    else if (W[i] != W[m] && m != 0) {
      //Note that we do not increment i here.
      m = aux[m - 1];
    } else {
      // m = 0, we move to the next letter,
      // there was no any prefix found which
      // is equal to the suffix for index i
      aux[i] = 0;
      i += 1;
    }
  }
  return aux;
}
// acabacacd
console.log(createAux("abcdabcabc"));
