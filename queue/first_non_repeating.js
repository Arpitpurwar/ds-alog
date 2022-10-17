function find(string) {
  let count = new Array(26);
  count.fill(0);
  let q = [];
  for (let i = 0; i < string.length; i++) {
    let ch = string.charAt(i);
    if (count[ch.charCodeAt(0) - "a".charCodeAt(0)] >= 1) {
      count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
      return;
    }
    q.push(ch);
    count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
    while (q.length != 0) {
      if (count[q[0].charCodeAt(0) - "a".charCodeAt(0)] > 1) {
        q.shift();
      } else {
        console.log(q[0]);
        break;
      }
    }
    if (q.length == 0) {
      console.log(-1);
    }
  }
}
find("abacacb");
