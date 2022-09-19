function verify(mid, array, n, K)
{   // mid =17;
    var sub_array = 0; // 1
    var sum = 0;
    for (var i = 0; i < n; i++) {

     
        if (array[i] > mid){
   				return false;
		}

        sum += array[i]; // sum = 10 {1,3,2,4} // sum = 10 {10} // sum = 8 {8} // sum = 6 {4,2}// sum = 8{5,3}

        if (sum > mid) {
            sub_array++;
            sum = array[i];
        }
    }
    sub_array++;

   
    if (sub_array <= K)
        return true;
    return false;
}


function splitArray(array, n, K)
{
    var max = array.reduce((a,b)=>Math.max(a,b)); // 10
    var start = max; //10
    var end = 0; 

    for (var i = 0; i < n; i++) {
        end += array[i]; 
    }
// end = 42
   
    var answer = 0;
    while (start <= end) {
        var mid = parseInt((start + end) / 2); // 26

      
        if (verify(mid, array, n, K)) {
            answer = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return answer;
}

var array = [1, 3, 2, 4, 10, 8, 4, 2, 5, 3];
var n = array.length;
var K = 4;
console.log(splitArray(array, n, K));
