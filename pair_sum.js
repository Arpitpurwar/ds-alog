


// console.log(pair_sums(arr,target))


const arr = [1,3,4,5,7,10,11,12];
const target = 17;

function pair_sums(arr, target){
	let left =0;
	let right = arr.length-1;

	while(left <= right){
		let mid = Math.floor((left+right)/2);

		if(arr[mid]+arr[mid-1] === target || arr[mid] + arr[mid+1] === target){
			if(arr[mid]+arr[mid-1] === target){
				return [arr[mid],arr[mid-1]]
			}else{
				return [arr[mid],arr[mid+1]]
			}
		}
		else if(arr[mid]+arr[mid-1] < target || arr[mid] + arr[mid+1] < target){
			left = mid+1;
		}else{
			right = mid -1;
		}
	}

	return -1;

}

console.log(pair_sums(arr, target))