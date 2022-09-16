const arr = [1,2,4,5,7,9]
const target = 2;


function binary_search(arr, target){
	let left = 0;
	let right = arr.length-1;

	while(left <= right){ // once left is greater than right stop the loop
		let mid = Math.floor((right + left)/2)
		console.log('start', left, mid, right)
		if(arr[mid] === target){
			return mid
		}else if(arr[mid] < target){
			left = mid +1;
		}else{
			right = mid -1;
		}
		console.log('End', left, mid, right)

	}

	return -1;

}

console.log(binary_search(arr, target))