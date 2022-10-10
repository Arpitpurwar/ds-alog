// arr = [2,3,7,8,10]
// search for equal sum subset exist if we add both subset shoudl get same sum 
// Leet code https://leetcode.com/problems/partition-equal-subset-sum/

let arr = [2,3,7,8,10];
let n = arr.length;

let sum  = 0;

for(let i = 0; i < arr.length; i++){
	sum+= arr[i];
}

if(sum%2 !== 0){
	return false;
}

sum = sum/2;
let matrix = []
for(let i = 0; i < n+1; i++){
		matrix[i] = []
}

//intiliazation
for(let i = 0; i< n+1; i++){
	for(let j = 0; j< sum+1; j++){
		if(j == 0){
			matrix[i][j] = true;
		}else if(i == 0){
			matrix[i][j] = false;
		}
	}
}

// Choice Digram
for(let i = 1; i< n+1; i++){
	for(let j = 1; j< sum+1; j++){
		if(arr[i-1] <= j){
			matrix[i][j] = matrix[i-1][j-arr[i-1]] || matrix[i-1][j]; 
		}else {
			matrix[i][j] = matrix[i-1][j]
		}
	}
}
