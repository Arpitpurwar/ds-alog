// arr = [4,1,1,1,2,3,5]
// k = 5
// find out the longest subarray whose sum is 5
// [4,1], [5], [2,3],[1,1,1,2] so the longest sub array is 4 whose sum is 5

let arr = [4,1,1,1,2,3,5];
let k = 5;
let i = 0, j=0;
let ans = Number.MIN_VALUE;
let sum = 0;

while(j < arr.length){
	sum += arr[j];
	if(sum === k){
		ans = Math.max(ans,j-i+1)
	}else if(sum > k){
		while(sum > k){
			sum-=arr[i];
			i++
		}
	}
	j++;
}

console.log(ans)