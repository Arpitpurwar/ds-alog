const wordStrength = function(s) {
    let windowsCharsMap = {};
    let windowStart = 0;
    let maxLength = 0;
 
    for ( let i = 0; i < s.length; i++ ) {
       const endChar = s[i];
 
       if(windowsCharsMap[endChar] >= windowStart) {
          windowStart = windowsCharsMap[endChar] + 1;
       }
       windowsCharsMap[endChar] = i;
       maxLength = Math.max(maxLength, i - windowStart + 1);
    }
 
    return ((maxLength / s.length) * 100).toFixed(2);
 }