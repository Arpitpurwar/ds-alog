const arr = [5,7,7,8,8,10]
const target = 7;

function searchRight(arr, target){
	let left = -1;
	let right = arr.length; 

	while(left+1 < right){
		let mid = Math.floor((left+right)/2);
		console.log('left', left, 'right', right, 'mid', mid)
		if(arr[mid] > target){
			right = mid
		}else{
			left = mid
		}
	}

	console.log('left', left, 'right', right)
	if(arr[right -1] === target){
		return right-1;
	}else{
		return -1;
	}


}

function searchLeft(arr, target){
	let left = -1;
	let right = arr.length; 

	while(left+1 < right){
		let mid = Math.floor((left+right)/2);
		console.log('left', left, 'right', right, 'mid', mid)
		if(arr[mid] >= target){
			right = mid
		}else{
			left = mid
		}
	}

	console.log('left', left, 'right', right)
	if(arr[right] === target){
		return right;
	}
	else {
		return -1;
	}
}

function searchTarget(arr, target){
	const leftIndex = searchLeft(arr, target);
	const rightIndex = searchRight(arr, target);

	if(leftIndex === -1 && rightIndex === -1){
		return [-1,-1]
	}
	else{
		return [leftIndex, rightIndex]
	}

}


console.log(searchTarget(arr, target))