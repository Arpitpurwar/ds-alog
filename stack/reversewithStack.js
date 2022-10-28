function shiftElement(S, S_, n) {
  for (let i = 0; i < n; i++) {
    var temp = S[S.length - 1];
    S.pop();
    S_.push(temp);
  }
}
function reverseElement(S, n) {
  var S_ = [];
  for (let i = 0; i < n; i++) {
    var item = S[S.length - 1];
    S.pop();
    shiftElement(S, S_, n - i - 1);
    S.push(item);
    shiftElement(S_, S, n - i - 1);
  }
}
let S = [1, 2, 3, 4, 5];
reverseElement(S, S.length);
console.log(S);
