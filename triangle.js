function countGreater(arr, n, k)
{
    var l = 0;
    var r = n - 1;
    var leftGreater = n;
    while (l <= r) {
        var m = Math.floor((l+r)/2);
 
        if (arr[m] > k) {
            leftGreater = m;
            r = m - 1;
        }
        else
            l = m + 1;
    }

    return (n - leftGreater);
}
 
function findTriplet(arr, n)
{
 
    arr.sort((a,b) => a-b); // arr = [2,5,6,9]
    var count = 0 ;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (countGreater(arr,n,arr[i]+arr[j]) > 0) {
                count ++;
            }
        }
    }
    
   console.log(count);
}


    let arr = [2,3,5,9 ];
    let n = arr.length;

    findTriplet(arr, n);