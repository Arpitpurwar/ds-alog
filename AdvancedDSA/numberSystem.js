function convertToDecimal(string){
    let result = 0;

    for(let i = 0; i< string.length; i++){
        let twentySixWithBase = Math.pow(26, string.length-i-1);

        let numericValue = string[i].charCodeAt(0)-64;

        result += numericValue * twentySixWithBase;
    }

    return result;
}

// TC - O(n);
// SC - O(1);   
print(convertToDecimal(readline()))
