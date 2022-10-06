let arr =[[0, 30],[5, 10],[15, 20]]

let sortedArray = arr.sort((a,b) => a[0]-b[0]);
let ansQueue = [];

for(let interval of arr){
	if(ansQueue.length === 0){
		ansQueue.push(interval[1]);
	}else{
		if(interval[0] >= ansQueue[0]){
			ansQueue.shift();
		}
			ansQueue.push(interval[1])
			ansQueue.sort()
	}
}

console.log(ansQueue)