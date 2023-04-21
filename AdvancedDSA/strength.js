function calcStrength(string){
    let charObject = {};
    let startWindow = 0;
    let maxLength = 0;

    for(let i = 0; i< string.length; i++){
        if(charObject[string[i]] >= startWindow){
            startWindow = charObject[string[i]] + 1;
        }
        charObject[string[i]] = i;
        maxLength = Math.max(maxLength, i-startWindow+1);
    }

    let result =  ((maxLength /string.length)*100).toFixed(2);

    return result;


}

// TC - O(n)
// SC - O(n)
print(calcStrength(readline()))
