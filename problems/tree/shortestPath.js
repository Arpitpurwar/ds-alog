/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

class Cell{
	constructor(row,col,superPower){
		this.row = row;
		this.col = col;
		this.superPower = superPower;
	}
}

var shortestPath = function(grid, k) {
	let row = grid.length;
	let col = grid[0].length;
    
    if(row === 1 && col ===1){
        return 0
    }

	let mat = [];
	let queue = [];

	// 2D matrix creation
	for(let i =0; i< row; i++){
		mat.push([]);
	}

	for(let i = 0; i< row;i++){
		for(let j =0; j<col; j++){
			if(i ===0 && j=== 0){
				mat[0][0] = k;
			}else{
				mat[i][j] = -1;
			}
		}
	}

	queue.push(new Cell(0,0,k));
	let level = 0;
	let direction = [[0,1],[0,-1],[1,0],[-1,0]];

	while(queue.length > 0){
		let size = queue.length;

		while(size-- > 0){
			let currentCell = queue.shift();
			let currentRow = currentCell.row;
			let currentCol = currentCell.col;
			let currentCellSuperPower = currentCell.superPower;

			for(let i =0; i < direction.length; i++){
				let nextRow = currentCell.row + direction[i][0];
				let nextCol = currentCell.col + direction[i][1];

			if(nextRow === row-1 && nextCol === col-1){
				return level+1;
			}

				if(nextRow >= 0 && nextCol >=0 && nextRow < row && nextCol< col){
					if(grid[nextRow][nextCol]===1 && currentCellSuperPower > 0 &&
						mat[nextRow][nextCol] < currentCellSuperPower-1 ){
							queue.push(new Cell(nextRow,nextCol,currentCellSuperPower-1))
							mat[nextRow][nextCol] = currentCellSuperPower-1;
						}

					if(grid[nextRow][nextCol]===0 &&
						mat[nextRow][nextCol] < currentCellSuperPower ){
							queue.push(new Cell(nextRow,nextCol,currentCellSuperPower))
							mat[nextRow][nextCol] = currentCellSuperPower;
						}
				}

			}
		}
		level++;
	}
    
    return -1;
};