function compute(expression) {
  let tokens = expression.split(""); // Get the tokens in the expression;

  let num_stack = []; //stack to store integer
  let sym_stack = []; //Stack to store symbols
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] == " ") continue;
    if (tokens[i] >= "0" && tokens[i] <= "9") {
      let sbuf = "";
      //If the consecutive tokens are integers then append the values;
      while (i < tokens.length && tokens[i] >= "0" && tokens[i] <= "9") {
        sbuf = sbuf + tokens[i++];
      }

      //Convert it to string and store it in integer stack
      num_stack.push(parseInt(sbuf, 10));
      i--;
    }
    //If bracket open then directly push it into stack
    else if (tokens[i] == "(") sym_stack.push(tokens[i]);
    //If bracket is close then compute the expression by poping values
    // from integers stack
    else if (tokens[i] == ")") {
      while (sym_stack[sym_stack.length - 1] != "(") {
        num_stack.push(
          computeOpertation(sym_stack.pop(), num_stack.pop(), num_stack.pop())
        );
      }
      sym_stack.pop();
    } else if (
      tokens[i] == "+" ||
      tokens[i] == "-" ||
      tokens[i] == "*" ||
      tokens[i] == "/"
    ) {
      while (
        sym_stack.length > 0 &&
        hasPrecedence(tokens[i], sym_stack[sym_stack.length - 1])
      ) {
        num_stack.push(
          computeOpertation(sym_stack.pop(), num_stack.pop(), num_stack.pop())
        );
      }
      sym_stack.push(tokens[i]);
    }
  }

  while (sym_stack.length > 0) {
    num_stack.push(
      computeOpertation(sym_stack.pop(), num_stack.pop(), num_stack.pop())
    );
  }
  return num_stack.pop();
}

function hasPrecedence(op1, op2) {
  if (op2 == "(" || op2 == ")") {
    return false;
  }
  if ((op1 == "*" || op1 == "/") && (op2 == "+" || op2 == "-")) {
    return false;
  } else {
    return true;
  }
}

function computeOpertation(operator, n1, n2) {
  switch (operator) {
    case "+":
      return n2 + n1;
    case "-":
      return n2 - n1;
    case "*":
      return n2 * n1;
    case "/":
      if (n1 == 0) console.log("Cannot divide by zero");
      return parseInt(n2 / n1, 10);
  }
  return 0;
}

//console.log(compute("123/0"));
console.log(compute("212 * ( 65 + 12 )"));
