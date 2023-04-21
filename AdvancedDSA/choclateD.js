function findLesserOrEqualValues(sum, mat){
    let counter = 0;

    for(let i = 0; i< mat.length; i++){
        if(mat[i][0] > sum){
            return counter;
        }

        if(mat[i][mat[0].length-1] <= sum){
            counter += mat[0].length;
            continue;
        }

        for(let k =0; k< mat[0].length; k++ ){
            if(mat[i][k] <= sum){
                counter++;
            }
        }
    }

    return counter;

}

function findKthSmallest(mat,n,k){
    let left = mat[0][0];
    let right = mat[mat.length-1][mat[0].length-1];

    while(left <= right){
        let mid = left + parseInt((right - left) / 2, 10);
        let lesserValue = findLesserOrEqualValues(mid,mat);
        console.log('lesser',lesserValue, mid);
        if(lesserValue >= k){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }

    return left;
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
// let result = sumOfQueue(mat)
// const mat = [[10,20,30,40],
// [15,25,35,45],
// [24,29,37,48],
// [32,33,39,50]]
// console.log(findLesserOrEqualValues(10,mat))
console.log(findKthSmallest(mat, 4, 5));