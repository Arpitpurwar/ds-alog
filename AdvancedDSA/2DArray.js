let oneDArray = [1,2,3,4,'hello', true]; // 1D Array

let twoDArray = [[4,6,8],[9,1,6],[8,2,10]];

let row = twoDArray.length;
let column = twoDArray[0].length;

// TC (row * column)
for(let i = 0; i< row; i++){
    for(let j= 0; j< column; j++){
        console.log('row', i, 'column', j);
        console.log('Element', twoDArray[i][j]);
    }
}
