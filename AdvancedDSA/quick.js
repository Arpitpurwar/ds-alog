const quick = (arr, low, high) => {
    if (low >= high)
        return;
    let start = low;
    let end = high;
    let mid = Math.floor((Math.random() * high) + low);
    let pivot = arr[mid];
 
    while (start < end) {
        while (arr[start] < pivot){
            start++;
        }
 
        while (arr[end] > pivot) {
            end--;
        }
 
        if (start <= end) {
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    quick(arr, low, end);
    quick(arr, start, high);
}
 
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
	let arr = readline().split(' ').map(item => parseInt(item));
	quick(arr, 0, arr.length - 1);
	console.log(arr.join(' '));
}


