/**
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix/
 */
// TC = o(row * col)
// SC = o(row + col)
var numSpecial = function(mat) {
    let row = mat.length;
    let col = mat[0].length;

// SC = o(row+col)
// TC = o(row*col)
    let rowCounter = new Array(row).fill(0); // [0,0,0]
    let colCounter = new Array(col).fill(0);// [0,0,0]

    for(let i = 0; i< row; i++){
        for(let j = 0; j<col; j++){
            if(mat[i][j]==1){
                rowCounter[i]++;
                colCounter[j]++;
            }
        }
    }

    let counter = 0;

    for(let i = 0; i< row; i++){
        for(let j = 0; j< col; j++){
            if(mat[i][j] === 1 && rowCounter[i] === 1 && colCounter[j] === 1){
                counter++;
            }
        }
    }

    return counter;

};