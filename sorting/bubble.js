function bubbleSort(inputArray) {
    for (var i = 0; i < inputArray.length; i++) { // n
        var isSwapped = false
        // Last i elements are already sorted
        for (var j = 0; j < (inputArray.length - i - 1); j++) {
            // Check if the current element is greater than the next element
            if (inputArray[j] > inputArray[j + 1]) {
                // If the condition is true then swap them
                var temp = inputArray[j]
                inputArray[j] = inputArray[j + 1]
                inputArray[j + 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped)
            break
    }
    return inputArray
}

function minbubbleSort(inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
        var isSwapped = false
        // Last i elements are already sorted
        for (var j = inputArray.length - 1; j >i; j--) {
            // Check if the current element is greater than the next element
            if (inputArray[j] < inputArray[j - 1]) {
                // If the condition is true then swap them
                var temp = inputArray[j]
                inputArray[j] = inputArray[j - 1]
                inputArray[j - 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped)
            break
    }
    return inputArray
}

console.log(bubbleSort([7,4,1,0,2,5]))