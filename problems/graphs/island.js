const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

let row = grid.length; // 4
let column = grid[0].length; //5

let visited = []

for(let i = 0 ; i<row; i++){
	visited[i] = []
	for(let j = 0; j< column; j++){
		visited[i][j]= false;
	}
}
let totalIsland = 0;
for(let i = 0; i<row; i++){
	for(let j = 0; j< column; j++){
		if(grid[i][j]==="0"){
			visited[i][j] = true;
		}else{
			if(!visited[i][j]){
				totalIsland++;
				dfsRecursive(i,j);
				console.log('next island')
			}
		}
	}
}

function dfsRecursive(i, j){
	visited[i][j] = true;
	console.log('element',grid[i][j], i, j);

	if(grid[i][j] === "1"){
		if( i < row-1){
			if(!visited[i+1][j])dfsRecursive(i+1,j);
		}
		if( i > 0){
			if(!visited[i-1][j])dfsRecursive(i-1,j);
		}
		if(j < column-1){
			if(!visited[i][j+1])dfsRecursive(i,j+1);
		}
		if(j > 0){
			if(!visited[i][j-1])dfsRecursive(i,j-1);
		}
	}

}

console.log("totalIsland", totalIsland)



