// your code goes here
function findValidJSONString(jsonString){
    let bracketObj = {"{": "}", "[":"]","(":")"};
    let stack = [];

    for(let i=0; i<jsonString.length; i++ ){
        if(bracketObj[jsonString[i]]){
            stack.push(jsonString[i])
        }else{
            let top = stack.pop();
            if(bracketObj[top] !== jsonString[i]){
                return false;
            }
        }
    }

    if(stack.length === 0 ){
        return true;
    }else{
        return false;
    }

}
// TC- O(m)
// SC- O(m)
print(findValidJSONString(readline()))
//console.log(findValidJSONString("{[}(])"));
//console.log(findValidJSONString("{}()"));