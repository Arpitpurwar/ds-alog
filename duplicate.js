const arr = [1,3,4,5,5,7,7];
const target = 1;
function find_duplicate(arr, target){
	let left = 0;
	let right = arr.length-1;

	while(left <= right){
		let mid = Math.floor((left+right)/2);
		console.log('left', left, right, mid)
		if(arr[mid]=== target){
			if(arr[mid] === arr[mid-1] || arr[mid] === arr[mid+1]){
				return true;
			}
			else {
				return false;
			}

		}
		else if(arr[mid] < target){
			left = mid+1;
		}else{
			right = mid-1;
		}

	}

	return -1;
}

console.log(find_duplicate(arr, target))

