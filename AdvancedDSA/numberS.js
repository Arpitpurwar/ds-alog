const alphaToDec = function(alphaNum) {
    let decimalNum = 0;
 
    for ( let i = 0; i < alphaNum.length; i++) {
        const unitVal = Math.pow(26, alphaNum.length - i - 1 );
        const currentIndexVal = alphaNum[i].charCodeAt(0) - 64;
 
        decimalNum += unitVal * currentIndexVal;
    }
 
    return decimalNum;
};