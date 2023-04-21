function findJewels(jewels, stones){
    let counter = 0;
    let jewelMap = {};

    for(let i = 0; i< jewels.length; i++){
        jewelMap[jewels[i]] = true;
    }

    for(let j= 0; j< stones.length; j++){
        if(jewelMap[stones[j]]){
            counter++;
        }
    }

    return counter;
}
// TC - O(m+n);
// SC - O(m);

print(findJewels(readline(), readline()))
