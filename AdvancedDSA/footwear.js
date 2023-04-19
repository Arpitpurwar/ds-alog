function checkPairs(box){ // [3,3,8]
    let obj = {};

    let paired = [];
    let unpaired = [];

    for(let i =0; i< box.length; i++){
        if(obj[box[i]]){
            obj[box[i]] = obj[box[i]] +1;
        }else{
            obj[box[i]] = 1; // { "3" : 2, "8": 1}
        }
    }

    Object.keys(obj).forEach(value => {
        if(obj[value] > 1){
            paired.push(value, value)
        }else{
            unpaired.push(value);
        }
    })

    return {paired, unpaired}
}


//console.log(checkPairs([7,8]));
function pairFormation(mat){
    let pairedFormation = [];
    let unPairedFormation = [];

    mat.forEach(value => {
        
       let { paired, unpaired} =  checkPairs(value);
       if(paired.length > 0){
        pairedFormation.push(paired);
       }

       if(unpaired.length > 0){
        unPairedFormation.push(...unpaired);
       }
    });

    let {paired}=checkPairs(unPairedFormation);

    pairedFormation.push(paired);

    return pairedFormation;
}


//console.log(pairFormation([[7,8],[7,8]]))

console.log(pairFormation([[3,3,8],[9,8,9],[15,15]]))