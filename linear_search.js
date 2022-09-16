// Linear  Search

const arr = [1,2,7,9,2,6];
const target = 2;

// arr.length = 6

// // Iteration approach

// const indexs = [];
// for(let i =0; i < arr.length; i++){
// 	if(arr[i] === target){
// 		console.log('index for target is', target, i);
// 	 	indexs.push(i);
// 	}
// }

// recursive approach
function linear_search(arr, target, count){
	if(arr[count] === target){
		return count;
	}
	if(arr.length === count){
		return -1;
	}

	return linear_search(arr, target,count+1)
}

const result = linear_search(arr, target, 0)
console.log('result', result)
