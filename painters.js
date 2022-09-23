function numberofPainters(arr, n, maxLen) {
    let total = 0, paintersCount = 1;

    for (let i = 0; i < n; i++) {
        total += arr[i];

        if (total > maxLen) {
            total = arr[i];
            paintersCount++;
        }
    }
    return paintersCount;
}

function partition(arr, n, a) {
    let low = Math.max(...arr);
    let high = arr.reduce((a, b) => a + b)
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        let requiredPainters = numberofPainters(
            arr, n, mid);

        if (requiredPainters <= a)
            high = mid;
        else
            low = mid + 1;
    }
    return low;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];//Array of boards
let n = arr.length;
let a = 3;//No of painters
console.log('Minimum time taken is ' + partition(arr, n, a)+ ' units');
