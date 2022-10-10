let weight = [1,3,5,7];
let price = [1,2,1,4];
let c = 7;
let n = weight.length;

let matrix = []
for(let i = 0; i < n+1; i++){
		matrix[i] = []
}

// Initilization
for(let i = 0; i< n+1; i++){
	for(let j = 0; j< c+1; j++){
		if( i == 0 || j == 0){
			matrix[i][j] = 0;
		}
	}
}

for(let i = 1; i< n+1; i++){
	for(let j = 1; j< c+1; j++){
		if(weight[i-1] <= j){
			matrix[i][j] = Math.max(price[i-1]+matrix[i-1][j-weight[i-1]],matrix[i-1][j])
		}else{
			matrix[i][j] = matrix[i-1][j];
		}
	}
}

console.table(matrix[n][c])
// function knapSack(weight, price, capacity, n){
// 	if(n == 0 || capacity == 0){
// 		return 0
// 	}

// 	if(weight[n-1] < capacity){
// 		return Math.max(price[n-1]+knapSack(weight,price,capacity-weight[n-1],n),
// 		knapSack(weight,price,capacity,n-1))

// 	}else{
// 		return knapSack(weight, price,capacity, n-1)
// 	}
// }

// console.log(knapSack(weight, price, capacity, weight.length))

