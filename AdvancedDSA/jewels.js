const numJewelsInStones = function(jewels, stones) {
    const jewelList = {};
    for ( let i = 0; i < jewels.length; i++) {
        jewelList[jewels[i]] = true;
    }
    let jewelsCount = 0;
    for ( let i = 0; i < stones.length; i++) {
        if (jewelList[stones[i]]) jewelsCount++
        
    }
    
    return jewelsCount;
};