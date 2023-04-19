const calculateAverage = (arr) => {
	let result = 0;
	arr.forEach(item => {
		result += (item[1] - item[0])
	})
	return Math.round(result/2);
}

const matrix = [[7,8],[7,10]];
console.log(calculateAverage(matrix));