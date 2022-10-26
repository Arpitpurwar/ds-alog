function computeexp(exp) {
  let stack = [];
  for (let idx = 0; idx < exp.length; idx++) {
    let ch = exp[idx];

    if (!isNaN(parseInt(ch))) {
		stack.push(ch.charCodeAt(0) - "0".charCodeAt(0));
	}
    else {
      let v1 = stack.pop();
      let v2 = stack.pop();

      switch (ch) {
        case "-":
          stack.push(v2 - v1);
          break;

        case "+":
          stack.push(v2 + v1);
          break;

        case "/":
          stack.push(v2 / v1);
          break;

        case "*":
          stack.push(v2 * v1);
          break;
      }
    }
  }
  return stack.pop();
}

let exp = "331*+";
console.log(computeexp(exp));
