function countEmptyCells(matrix){
    let row = matrix.length -1;
    let col = 0;
    let answer = 0;

    while(col < matrix[0].length){
     
        while(matrix[row][col] > 0){
            if(--row < 0){ // row = -1
                return answer;
            }
        }
        answer+= row+1;
        col++;
    }

    return answer;

}


let mat = [];
let line = true;
while (line) {
	let inp = readline();
	if (inp){
		mat.push(inp.split(', ').map(item => parseInt(item)))
	}
	else {
		line = false;
	}
}
console.log(countEmptyCells(mat));
// const mat = [
//     [0, 0, 1],
//     [0, 1, 1],
//     [0, 1, 1]
// ];

//print(countEmptyCells(readline()))
//console.log(countEmptyCells(mat));