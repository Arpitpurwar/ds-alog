const arr = [2,3,5,2,9,7,1]
const k = 3;

// let maxSum = Number.MIN_VALUE;
// let windowStart = 0;
// let sum = 0;

// for(let i = 0;i< arr.length;i++){
// 	if(i > k-1){
// 		sum -= arr[windowStart]; // Find Answer
// 		windowStart++;	
// 	}
// 	sum += arr[i]; // calculation
// 	maxSum = Math.max(maxSum, sum)
// }

let maxSum = Number.MIN_VALUE;
let i =0, j = 0;
let sum = 0;
while(j < arr.length){
	sum += arr[j];
	if(j-i+1 == k){
		console.log(j, i)
		maxSum=Math.max(maxSum,sum);
		sum=sum-arr[i];
		i++;
	}
	j++;
}
console.log(maxSum);