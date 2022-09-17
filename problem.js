const arr = [2,5,5,9,11,12,12];
const target = 12;

function right(arr, target){
	let left = -1;
	let right = arr.length;

	while(left+1 < right){
		let mid = Math.floor((left+right)/2);

		if(arr[mid] > target){
			right = mid;
		}else{
			left = mid;
		}
	}
	console.log('left', left, 'right',right)
	if(arr[right-1] == target){
		return right-1;
	}else{
		return -1;
	}


}

function left(arr, target){
	let left = -1;
	let right = arr.length;

	while(left+1 < right){
		let mid = Math.floor((left + right)/2);
		console.log(mid,left,right)
		if(arr[mid] >= target){
			right = mid;
		}
		else{
			left = mid
		}
	}

	if(arr[right] === target){
		return right
	}else{
		return -1
	}
}
console.log('left',left(arr, target))
console.log('right',right(arr, target))
