// Quick Sort function => find (length - 1)
// and set start = 0
const quickSort = (arr) => {
    const end = arr.length - 1;
    const start = 0;
    sortArray(arr, start, end)
}

// Swapping two index value in an array
const swap = (arr, a, b) =>{
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// Sort function which execute recursively till sort
const sortArray = (arr, low, high) => {
    // To come out of the infinite loop
    if (low >= high) {
        return;
    }
    let start = low;
    let end = high;
    // const mid = Math.floor((start + end) / 2);
    // const pivot = arr[mid];
    const pivot = arr[low]; // 4

    // Iterate till start less than end
    while (start < end) {
        while (arr[start] < pivot) {
            start++;
        }

        while (arr[end] > pivot) {
            end--;
        }

        if (start <= end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }
    // Recursively pass the two subarray as a input
	console.log('low',low,'end',end, 'high',high, 'start', start)
	console.log('after while iterqation',arr)
    sortArray(arr, low, end);
    sortArray(arr, start, high);
    console.log(arr)

}

// const unsortedArray = [4, 3, 10, 24, 2, 1, 7, 6, 5]
const unsortedArray = [4, 3, 2, 1, 7, 6, 5]
quickSort(unsortedArray)
console.log(unsortedArray) // [1, 2, 3, 4, 6, 7, 8, 8]