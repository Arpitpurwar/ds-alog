/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null
    }
    
    let lengthA = 0;
    let lengthB = 0
    let listA = headA;
    let listB = headB;
    
    while(listA){
        lengthA++;
        listA = listA.next;
    }
     
    while(listB){
        lengthB++;
        listB = listB.next;
    }
    
    let currA = headA;
    let currB = headB;
    
    if(lengthA > lengthB){
        let temp = lengthA - lengthB;
        while(temp-- > 0){
            currA = currA.next;
        }
        
    }else if(lengthB > lengthA){
        let temp = lengthB - lengthA;
        while(temp-- > 0){
            currB = currB.next;
        }
    }
        
    while(currA !== currB){
        currA = currA.next;
        currB = currB.next;
    }
    
    return currA;
    
}