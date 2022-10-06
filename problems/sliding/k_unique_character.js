// str = aab

let i =0, j=0;
let map = new Map()
let str = 'aabacbebebe'
let ans = Number.MIN_VALUE;
let k = 3;

while(j < str.length){
	if(map.size === k){
		ans = Math.max(ans,j-i+1)
	}
	else if(map.size > k){
		while(map.size > k){
			let temp = map.get(str[i])-1;
			if(temp === 0){
				map.delete(str[i]);
			}else{
				map.set(str[i], temp);
			}
			i++;
		}
	}
	if(map.has(str[j])){
		map.set(str[j],map.get(str[j])+1)
	}else{
		map.set(str[j],1)
	}
	console.log(map)
	j++
}

console.log(ans)