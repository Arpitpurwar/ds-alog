function Patternsearch(pat, str) {
  let M = pat.length;
  let N = str.length;
  for (let i = 0; i <= N - M; i++) {
    for (let j = 0; j < M; j++) {
      if (str[i + j] != pat[j]) {
        break;
      }

      if (j == M - 1) {
        console.log("Pattern found at index ", i);
      }
    }
  }
}

console.log("THISISATEXT");
Patternsearch("IS", "THISISATEXT");
console.log("duceDuck");
Patternsearch("Duck", "duceDuck");

console.log("deadElephant");
Patternsearch("deadEye","deadElephant");
