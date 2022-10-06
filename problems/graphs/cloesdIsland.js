let grid = [[0,0,1,1,0,1,0,0,1,0],
[1,1,0,1,1,0,1,1,1,0],
[1,0,1,1,1,0,0,1,1,0],
[0,1,1,0,0,0,0,1,0,1],
[0,0,0,0,0,0,1,1,1,0],
[0,1,0,1,0,1,0,1,1,1],
[1,0,1,0,1,1,0,0,0,1],
[1,1,1,1,1,1,0,0,0,0],
[1,1,1,0,0,1,0,1,0,1],
[1,1,1,0,1,1,0,1,1,0]]


let row = grid.length;
let column = grid[0].length;
let closedIslands = 0;

for(let i = 0; i< row; i++){
	for(let j =0; j< column; j++){
		if(grid[i][j] === 0){
			if(dfsRecursive(i,j)){
				closedIslands++;
			}
		}
	}
}

function dfsRecursive(i,j){
	if(i > row-1 || j > column-1 || i< 0 || j <0){
		return false;
	}

	if ((grid[i][j] === 1) || (grid[i][j] === 'x')){
		return true;
	}

	grid[i][j] = 'x';

	let left = dfsRecursive(i,j-1);
	let right = dfsRecursive(i,j+1);
	let top = dfsRecursive(i-1,j);
	let bottom = dfsRecursive(i+1,j);
	return left && right && top && bottom;
}


console.log(closedIslands)