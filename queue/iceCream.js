/**
Problem Statement - Given a queue of N persons in the form of an array. 
Each element in the array denotes the currency of note that a person has. 
These persons are waiting to purchase an ice cream from X which costs Rs 5. 
Possible currency of notes can be 5, 10, and 20.
Initially, X has 0 amount. Your task is whether X can provide change to each
person or not. 

Input - [5,5,10,20]
Output - Yes

Time Complexity – 
If the number of elements in the input queue is n then, the time complexity will be O(n)

Space Complexity – 
If the number of elements in the input queue is n then, the space complexity will be O(1)

*/

function change(notes, n) {
  let countFive = 0;
  let countTen = 0;

  for (let i = 0; i < n; i++) {
    if (notes[i] == 5) countFive++;
    else if (notes[i] == 10) {
      if (countFive > 0) {
        countFive--;
        countTen++;
      } else return 0;
    } else {
      if (countFive > 0 && countTen > 0) {
        countFive--;
        countTen--;
      } else if (countFive >= 3) {
        countFive -= 3;
      } else return 0;
    }
  }
  return 1;
}

let a = [5, 5, 10, 20];
let n = a.length;

if (change(a, n) > 0) console.log("YES");
else console.log("NO");
