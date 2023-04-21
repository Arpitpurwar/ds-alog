let N = 5;

function countEmptyCell(mat) {

  let row = N - 1,
    col = 0;

  let count = 0;

  while (col < N) {
    while (mat[row][col] > 0){
        if (--row < 0){
        	return count;
        }
    }
		count += (row + 1);
    col++;
    
    console.log('r', row, 'c', col)
  }

  return count;
}


let mat = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 1, 1, 1, 1]
];