const countSort = (givenArray) => {
	const maxElement = Math.max(...givenArray)

	let frequency = new Array(maxElement+1).fill(0);

	for(let i =0; i< givenArray.length; i++){
		frequency[givenArray[i]] += 1;
	}

	// frequency = []

	let i = 0, j = 0;
	console.log(frequency)
	while(i <= maxElement){
		console.log('i', i)
		if(frequency[i] > 0){
			givenArray[j] = i;
			frequency[i]--;
			j++;
		}else{
			i++;
		}
	}
	return givenArray
}


let givenArray = [1, 4, 2, 3, 1, 1];
countSort(givenArray);
console.log("Result",countSort(givenArray));
console.log(givenArray);