const arr = [2,3,5,2,9,7,1]
const subArraySize = 3;

let maxSum = Number.MIN_VALUE;
let window = 0;
let sum = 0;

for(let i = 0;i< arr.length;i++){
	if(i > subArraySize-1){
		sum -= arr[window];
		window++;	
	}
	sum += arr[i];
	maxSum = Math.max(maxSum, sum)
}

console.log(maxSum);