const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

let row = grid.length; // 4
let column = grid[0].length; //5

let totalIsland = 0;
for(let i = 0; i<row; i++){
	for(let j = 0; j< column; j++){
		if(grid[i][j]=== "1"){
			totalIsland++;
			dfsRecursive(i,j);
		}
	}
}

function dfsRecursive(i, j){

	if(i > row-1 || j > column-1 || i < 0 || j < 0 ||  grid[i][j] !== "1" ){
		return;
	}

	grid[i][j] = '*'
	
	dfsRecursive(i+1,j);
	dfsRecursive(i-1,j);
	dfsRecursive(i,j+1);
	dfsRecursive(i,j-1);
}

console.log("totalIsland", totalIsland)



