//  1 is obstacles

let grid = [[0,0,0],[0,-1,0],[0,0,0],[0,-1,-1],[0,0,0]]
let row = grid.length;
let col = grid[0].length;
let srci = 3;
let srcj = 0;
let visited = []
for(let i = 0 ; i<row; i++){
	visited[i] = []
	for(let j = 0; j< col; j++){
		visited[i][j]= false;
	}
}

let desti = 0;
let destj = 1;
class Cell{
	constructor(i,j){
		this.i= i;
		this.j = j;
	}
}
let q = [];

q.push(new Cell(srci,srcj));
visited[srci][srcj] = true;
let directions = [[0,1],[0,-1],[1,0],[-1,0]];
let max = Number.MAX_VALUE;
let level = 0;
while(q.length > 0){
	let size = q.length;

	while(size-- >0){
		let node = q.shift();

		for(let i = 0; i<directions.length; i++){
			let newnodei = node.i + directions[i][0];
			let newnodej = node.j + directions[i][1];
			if (
        newnodei >= 0 &&
        newnodej >= 0 &&
        newnodei < row &&
        newnodej < col &&
        grid[newnodei][newnodej] !== -1 &&
        !visited[newnodei][newnodej]) {
			if(newnodei === desti && newnodej === destj){
				max = Math.min(level+1, max);
				
			}
	        q.push(new Cell(newnodei, newnodej));
	        visited[newnodei][newnodej] = true;
      }
		}
	}
	level++;
}

console.log(max);