const arr = [0,2,4,6,8,10,12,14,16,18,20]
const target = 21;

function ternary_search(arr, target){
	let left = 0;
	let right = arr.length-1;

	while(left <= right){
		let mid1 = left + Math.floor((right -left)/3);
		let mid2 = right - Math.floor((right-left)/3);

		if(arr[mid1] === target){
			return mid1
		}

		if(arr[mid2] === target){
			return mid2
		}

		if(arr[mid1] > target){
			right = mid1-1;
		}
		else if(arr[mid2] < target){
			left = mid2+1;
		}else{
			left = mid1+1;
			right = mid2-1;
		}
	}

	return -1;
}

console.log(ternary_search(arr, target))