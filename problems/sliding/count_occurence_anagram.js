// str1 = aabaabaa
// str2 = aaba
// find out count of anagram of string2 which present in string 1;

let str1 = 'aabaabaa';
let str2 = 'aabaa';

let map = new Map();
for(let letter of str2){
	if(map.has(letter)){
		map.set(letter,map.get(letter)+1);
	}else{
		map.set(letter,1);
	}	
}

let distinctValues = map.size; // distinct values in str2
let i =0, j=0;
let ans = 0;
while(j < str1.length){
	if(map.has(str1[j])){
		let temp = map.get(str1[j])-1
		map.set(str1[j], temp);
		if(temp === 0){
			distinctValues--;
		}
	}
	console.log("before",map,distinctValues,j,i)
	if(j-i+1 === str2.length){
		if(distinctValues === 0){
			ans++;
		}
		if(map.has(str1[i])){
			let temp = map.get(str1[i])+1;
			map.set(str1[i], temp)

			if(temp ===1){
				distinctValues++;
			}
		}
		console.log("after",map, distinctValues, j, i);
		i++;
	}
	j++;
}

console.log(ans)
