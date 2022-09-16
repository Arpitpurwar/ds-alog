// Linear  Search

const arr = [1,2,7,9,2,6];
const target = 6;

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
	if(arr[count] === target){ // 0 1
		return count;
	}
	if(arr.length-1 === count){ // (5,0),(5,1),(5,2),(5,3),(5,4),(5,5)
		return -1;
	}

	return linear_search(arr, target,count+1)
}

const result = linear_search(arr, target, 0)
console.log('result', result)
