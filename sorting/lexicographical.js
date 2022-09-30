
function sortString(arr)
{
	var n = arr.length;

	var output = Array.from({length: n}, (_, i) => 0);

	var count = Array.from({length: 256}, (_, i) => 0);


	for (var i = 0; i < n; ++i)
		++count[arr[i].charCodeAt(0)];

	for (var i = 1; i <= 255; ++i)
		count[i] += count[i - 1];


	for (var i = n - 1; i >= 0; i--) {
		output[count[arr[i].charCodeAt(0)] - 1] = arr[i];
		--count[arr[i].charCodeAt(0)];
	}


	for (var i = 0; i < n; ++i)
		arr[i] = output[i];
	return arr;
}


	var str = "unacademy";
        
  var arr = Array.from(str);

	arr = sortString(arr);
	document.write("Sorted string is ");
	for (var i = 0; i < arr.length; ++i)
		document.write(arr[i]);
