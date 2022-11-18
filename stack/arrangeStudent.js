/**
 For a school parade boy and girls have form a line. Boy is represented as B, and Girl is represented as G.
The order in which they were supposed to stand was that the girl should stand at one end of line while
boys on the other end. But few students has broke this order by standing anywhere in the line. Now your
job is to help the teacher to identify minimum number such students who are violating the order and
remove them from the line so that post there removal the order is maintained.
Example Input-1
BBGBGGBG
Output:
2

Time Complexity: O(N)
Space Complexity: O(N)
 */
function deletionsCount(s) {
  let res = [];
  let count = 0;
  for (let idx = s.length - 1; idx > 0; idx--) {
    if (res.length == 0) {
      res.push(s.charAt(idx));
    } else if (res[res.length - 1] == "B" && s.charAt(idx) == "G") {
      count += 1;
      res.pop();
    } else {
      res.push(s.charAt(idx));
    }
  }
  return count;
}
console.log(deletionsCount("BBGBGGBG"));
