function getMaxStamina(n, height) {
  let stk = [];
  let compuations = height;
  for (let i = n - 1; i > -1; i--) {
    while (stk.length > 0 && height[stk[stk.length - 1]] < height[i]) {
		stk.pop();
	}
    if (stk.length > 0){
		compuations[i] ^= compuations[stk[stk.length - 1]];
	} 

    stk.push(i);
  }
  return Math.max(...compuations);
}

let n = 5;
let height = [1, 2, 3, 8, 6];
console.log(getMaxStamina(n, height));
