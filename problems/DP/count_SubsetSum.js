// arr = [2,3,7,8,10]
// sum = 10
// count the subset which exist if we add that subset so get sum as 5
// https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/

let arr = [2,3,7,8,10];
let sum = 10;
let n = arr.length;

let matrix = []
for(let i = 0; i < n+1; i++){
		matrix[i] = []
}

//intiliazation
for(let i = 0; i< n+1; i++){
	for(let j = 0; j< sum+1; j++){
		if(j == 0){
			matrix[i][j] = 1;
		}else if(i == 0){
			matrix[i][j] = 0;
		}
	}
}

// Choice Digram
for(let i = 1; i< n+1; i++){
	for(let j = 1; j< sum+1; j++){
		if(arr[i-1] <= j){
			matrix[i][j] = matrix[i-1][j-arr[i-1]] + matrix[i-1][j]; 
		}else {
			matrix[i][j] = matrix[i-1][j]
		}
	}
}

console.table(matrix);
console.log(matrix[n][sum])