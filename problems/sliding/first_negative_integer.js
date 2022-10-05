// arr = [12, -1,-7, 8, -15,30,16,28]
// k = 3
// output = print first negative integer in a window size of K if there is no negative integer
// print 0.

// const arr = [12, 1, -7, 8, -15, 30, 16, -28];
// const k = 3;

// let windowStart = 0;
// let captureNegativeValues = [];

// for(let i = 0; i <= arr.length; i++){
// 	if(i > k-1){
// 		if(captureNegativeValues.length == 0){
// 			console.log('No negative index in this window');
// 		}else{
// 			console.log('firstNegative Integer',captureNegativeValues[0], windowStart+1);
// 		}
// 		if(arr[windowStart] === captureNegativeValues[0]){
// 			captureNegativeValues.shift();
// 		}
// 		windowStart++
// 	}
// 	if(arr[i] < 0){
// 		captureNegativeValues.push(arr[i]);
// 	}
// }

const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;

let i=0,j= 0;
let negatives = []
while(j < arr.length){
	if(arr[j] < 0){
		negatives.push(arr[j]);
	}
	if(j-i+1 == k){
		if(negatives.length === 0){
			console.log('No Negative index for this window', 0)
		}
		if(negatives.length > 0){
			console.log('first negative', negatives[0])
		}
		if(negatives[0] === arr[i]){
			negatives.shift()
		}
		i++;
	}
	j++;
	
}