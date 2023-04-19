/**
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix/
 */
// TC = o(row * col)
// SC = o(row + col)
var numSpecial = function(mat) {
    let row = mat.length; 
    let col = mat[0].length;
    let rowArray = new Array(row).fill(0);
    let colArray = new Array(col).fill(0); 

    for(let i = 0; i< row; i++){
        for(let j=0; j<col; j++){
            if(mat[i][j] === 1){
                rowArray[i]++;
                colArray[j]++
            }
        }
    }
    let count = 0;
    for(let i = 0; i< row; i++){
            for(let j=0; j<col; j++){
                if(mat[i][j] === 1 && rowArray[i] === 1 && colArray[j] === 1){
                    count++;
                }
            }
        }

    return count;
};