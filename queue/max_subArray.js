// array = 1,3,-1,-3,5,3,6,7
//k = 3


let arr = [1,3,-1,-3,5,3,6,7]
let k = 3

let i=0; j = 0;
let queue = []; 
let result = [];

while(j < arr.length){

	while(queue.length > 0 && queue[0] < arr[j]){
		queue.shift()
	}
	queue.push(arr[j])
	
	if(j-i+1 === k){
		result.push(queue[0]);
		if(queue[0] === arr[i]){
			queue.shift()
		}
		i++;
	}
	j++
}

console.log(result)