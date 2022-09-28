const bucketSort = (givenArray) => {
	const maxElement = Math.max(...givenArray);
	const minElement = Math.min(...givenArray);
	const base = 10;

	const numberOfBucket = Math.floor(maxElement/base) - Math.floor(minElement/base) + 1;
	
	let bucket = new Array(numberOfBucket);
	for (let i = 0; i < numberOfBucket; i++){
		bucket[i] = [];
	};

	for (let i = 0; i < givenArray.length; i++) {
		let index = Math.floor(givenArray[i] / 10) - Math.floor(minElement/base); // Starting from the minElement only not from 0.
		bucket[index].push(givenArray[i]);
	}
	console.log("Before Sorting Each Bucket");
	console.log(bucket);

	for (let i = 0; i < numberOfBucket; i++){
		bucket[i].sort();
	}
	
	console.log("After Sorting Each Bucket");
	console.log(bucket);
	let index = 0;
	for (let i = 0; i < numberOfBucket; i++){
		for (let j = 0; j < bucket[i].length; j++){
			givenArray[index++] = bucket[i][j];
		}
	}

}

let givenArray = [29, 34, 19, 39, 21, 41];
bucketSort(givenArray);
console.log(givenArray)