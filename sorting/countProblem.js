

	function countSort(arr)
	{
	var max = Math.max(...arr);
	var min = Math.min(...arr);

	var range = max - min + 1;
	var count = Array.from({length: range}, (_, i) => 0);
	var output = Array.from({length: arr.length}, (_, i) => 0);
	for (i = 0; i < arr.length; i++) {
		count[arr[i] - min]++;
	}
	console.log('Count array', count);
	for (i = 1; i < count.length; i++) {
		count[i] += count[i - 1];
	}
	console.log('count sum array', count)

	for (i = arr.length - 1; i >= 0; i--) {
		output[count[arr[i] - min] - 1] = arr[i];
		count[arr[i] - min]--;
	}
console.log('output array', output)
	for (i = 0; i < arr.length; i++) {
		arr[i] = output[i];
	}
}

function print(arr)
{
	for (i = 0; i < arr.length; i++)
	{
		console.log(arr[i] + " ");
	}
}


var arr = [ -15, -10, 0, -13, 18, 5, -11, 10 ];
countSort(arr);
print(arr);
