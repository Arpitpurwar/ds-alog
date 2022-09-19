// Javascript program to find the number of indices pair
// such that pair sum from first Array
// is greater than second Array
 
 
// Function to get the number of pairs of indices
// {i, j} in the given two arrays A and B such that
// A[i] + A[j] > B[i] + B[j]
function getPairs(A, B, n)
{
    // Initializing the difference array D
    let D = new Array(n);
 
    // Computing the difference between the
    // elements at every index and storing
    // it in the array D
    for (let i = 0; i < n; i++) {
        D[i] = A[i] - B[i];
    }
 
    // Sort the array D
    D.sort((a, b) => a - b);
 
    // Variable to store the total
    // number of pairs that satisfy
    // the given condition
    let total = 0;
 
    // Loop to iterate through the difference
    // array D and find the total number
    // of pairs of indices that follow the
    // given condition
    for (let i = n - 1; i >= 0; i--) {
 
        // If the value at the index i is positive,
        // then it remains positive for any pairs
        // with j such that j > i.
        if (D[i] > 0) {
            total += n - i - 1;
        }
 
        // If the value at that index is negative
        // then we need to find the index of the
        // value just greater than -D[i]
        else {
            let k = binary_search(D, 0, D.length, -D[i])
  
            total += n - k;
            console.log('total', total, k, n)
        }
    }
    return total;
}
 
function binary_search(a, low, high, element)
{
    while(low < high){
        let middle = low +  Math.floor((high - low)/2);
        console.log('low', low, high, middle, element);
        if(a[middle] > element)
            high = middle;
        else
            low = middle + 1;
    }
    return low;
}
console.log(getPairs([4,8,2,6,2],[4,5,4,1,3],5))
// console.log(getPairs([1,2,3,4],[1,2,3,4],4))