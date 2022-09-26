function selectionSort(inputArray)
{
    var i, j, minimumIndex;
 
    for (i = 0; i < inputArray.length-1; i++)
    {
        // Initialize the current element as minimumIndex
        minimumIndex = i;
        for (j = i + 1; j < inputArray.length; j++)
        {
            if (inputArray[j] < inputArray[minimumIndex])
            {
                minimumIndex = j;
            }
        }
        // Swap the found minimum element with the current element
        if (minimumIndex != i)
        {
            var temp = inputArray[minimumIndex]
            inputArray[minimumIndex] = inputArray[i]
            inputArray[i] = temp
        }
    }

	return inputArray;
}


console.log(selectionSort([8,6,2,4,0]))