function onCollision(asteroids) {
  let resultStack = [];
  //Traverse through each asteroid in the array
  asteroids.forEach((x) => {
    //If moving in right direction then store it in stack
    if (x > 0) resultStack.push(x);
    //If found an asteroid moving in the left direction then check for collision
    else {
      //If the stack  not empty then keep poping till the time the top most element is less than the size of the current element

      while (
        resultStack.length != 0 &&
        resultStack[resultStack.length - 1] > 0 &&
        resultStack[resultStack.length - 1] < Math.abs(x)
      )
        resultStack.pop();
      //Insert the element in the stack only if the last most element is less than 0
      if (resultStack.length == 0 || resultStack[resultStack.length - 1] < 0)
        resultStack.push(x);
      else if (resultStack[resultStack.length - 1] == Math.abs(x))
        resultStack.pop();
    }
  });
  return resultStack;
}

console.log(onCollision([10, 2, -5]));

