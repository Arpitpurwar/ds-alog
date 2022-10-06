// Give all unique character which are equal to size of window.
let i =0, j=0;
let map = new Map()
let str = 'aabacbebebe'
let ans = Number.MIN_VALUE;

while(j<str.length){
	if(map.has(str[j])){
		map.set(str[j], map.get(str[j])+1)
	}
	else{
		map.set(str[j],1)
	}
	if(map.size === j-i+1){
		ans = Math.max(ans, j-i+1)
	}
	else if(map.size < j-i+1){
		while(map.size < j-i+1){
			let temp = map.get(str[i])-1;
			if(temp === 0){
				map.delete(str[i])
			}else{
				map.set(str[i],temp)
			}
			i++;
		}
	}
	j++;
}

console.log(ans)