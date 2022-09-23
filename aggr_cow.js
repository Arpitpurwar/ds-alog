let n = 5;//No of stalls
let c = 2;//No of cows

function check(num, stallArr) {
    let cows = 1,
        pos = stallArr[0]; // 1
    for (let i = 1; i < n; i++) {
        if (stallArr[i] - pos >= num) {
            pos = stallArr[i];
            cows++;
            if (cows == c) return 1;
        }
    }
    return 0;
}

function binarySearch(stallArr) {
    let start = 0,
        end = stallArr[n - 1],
        max = -1;
    while (end > start) {
        let mid = Math.floor((start + end) / 2);
        if (check(mid, stallArr) == 1) {
            if (mid > max) max = mid;
            start = mid + 1;
        } else end = mid;
    }
    return max;
}
console.log("The minimum Distance = " + binarySearch([1, 2, 4, 8, 9]));