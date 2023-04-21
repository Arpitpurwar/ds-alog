//M = Rows, N = Columns
let M=4,N=3
//A = 2DArray
const A = [[3,4,5],[3,4,2],[2,3,4],[4,4,4]]
let col_sum=[]

//Iterate through  columns first
for(let idx = 0;idx<N;idx++){
	let sum_=0
  //Iterate through  rows
  for(let idx2 = 0;idx2<M;idx2++){
  	sum_+=A[idx2][idx];  //Add values from the column cells
  }
  col_sum.push(sum_);
}

//print the solution
console.log(col_sum);  //12,15,15