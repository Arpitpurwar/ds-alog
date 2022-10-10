// https://leetcode.com/problems/online-stock-span/
let arr = [100,80,60,120,60,75,85]
// op : [1,1,1,2,1,4,6]

class Pair {
	constructor(val, index){
		this.val = val;
		this.index = index;
	}
}
let stack = [new Pair(arr[0],0)];
let ans = [1];

for(let i = 1; i< arr.length; i++){
	if(stack[stack.length -1].val > arr[i]){
		ans.push(i-stack[stack.length -1].index);
	}
	else if(stack[stack.length -1].val <= arr[i]){
		while(stack.length > 0 && stack[stack.length -1].val <= arr[i]){
			stack.pop();
		}
		if(stack.length === 0){
			ans.push(i+1);
		}
		else if(stack[stack.length -1].val > arr[i]){
			ans.push(i-stack[stack.length -1].index);
		}
	}

	stack.push(new Pair(arr[i],i));

}

console.log(ans);