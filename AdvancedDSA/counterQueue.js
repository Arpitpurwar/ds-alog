// your code goes here

function sumOfQueue(matrix){
    let result = [];
    let column = matrix[0].length;
    let row = matrix.length;
    
    for(let i = 0; i< column; i++){
        let sum = 0;
        for(let j=0; j< row; j++){
            sum += matrix[j][i];
        }
        result.push(sum);
    }

    return result;

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
let result = sumOfQueue(mat)
console.log(result.join(', '));