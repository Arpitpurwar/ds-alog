function count(S , m , n )
{
	// If n is 0 then there is 1 solution
	// (do not include any coin)
	if (n === 0)
		return 1;
 
	// If n is less than 0 then no
	// solution exists
	if (n < 0)
		return 0;
 
	// If there are no coins and n
	// is greater than 0, then no
	// solution exist
	if (m <=0 && n >= 1)
		return 0;
 
	// count is sum of solutions (i)
	// including S[m-1] (ii) excluding S[m-1]\
	return count( S, m - 1, n ) +
		count( S, m, n - S[m - 1] );
}
 
// Driver program to test above function
// var n = parseInt(readline());
// var arr = readline().split(' ').map(item => parseInt(item));
// var m = arr.length;

let arr = [1,2,3,4,5,6];
let m = 6;
let n = 10;
console.log( count(arr, m, n));