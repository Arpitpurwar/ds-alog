let arr = [[1,3],[5,7],[3,1],[0,1],[2,4]]

let sortedArray = arr.sort((a,b) => a[0]-b[0]);
let ans = [];

for(let interval of arr){
	if(ans.length === 0){
		ans.push(interval)
	}else{
		let prevInterval = ans[ans.length-1];
		if(interval[0] < prevInterval[1]){
			prevInterval[1] = Math.max(interval[1],prevInterval[1])
		}else{
			ans.push(interval)
		}
	}
}

console.log(ans)
