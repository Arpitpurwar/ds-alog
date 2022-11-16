let W = "acabacacd";
let T = "acfacabacabacacdk";

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

let aux = createAux(W);
// counter for word W
let i = 0;
//  counter for text T
let j = 0;
while (j < T.length) {
  // We need to handle 2 conditions when there is a mismatch
  if (W[i] != T[j]) {
    // 1st condition
    if (i == 0) {
      // starting again from the next character in the text T
      j += 1;
    } else {
      // aux[i-1] will tell from where to compare next
      // and no need to match for W[0..aux[i-1] - 1],
      // they will match anyway, that’s what kmp is about.
      i = aux[i - 1];
    }
  } else {
    i += 1;
    j += 1;
    // we found the pattern
    if (i == W.length) {
      // printing the index
      console.log("found pattern at ", j - i);
      // if we want to find more patterns, we can
      // continue as if no match was found at this point.
      i = aux[i - 1];
    }
  }
}
