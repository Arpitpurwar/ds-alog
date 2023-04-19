var pairFormation = function (matrix) {
 
    let pairedArray = [];
    let unPairedArray = [];
 
    matrix.forEach(item => {
    	let [resultPairs, nonResultPairs] = checkPairs(item);
        if (resultPairs.length)
    	    pairedArray.push(resultPairs);
    	unPairedArray.push(...nonResultPairs);
    })
    let [resultPairs, nonResultPairs] = checkPairs(unPairedArray);
	pairedArray.push(...resultPairs);
    return pairedArray;
};
 
const checkPairs = (arr) => {
	const pairs = {};
	const resultPairs = [];
	const nonResultPairs = [];
	arr.forEach(item => {
		if (pairs[item])
			pairs[item] += 1;
		else
			pairs[item] = 1;
	})
	Object.keys(pairs).map(item => {
		if (pairs[item] > 1)
			resultPairs.push([item, item]);
		else
			nonResultPairs.push(item);
	})
	return [resultPairs, nonResultPairs];
}


const matrix = [[7,8],[8,7]];
console.log(pairFormation(matrix));