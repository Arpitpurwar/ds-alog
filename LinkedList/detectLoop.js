var detectCycle = function(head) {
    if(!head){
        return head;
    }
    let slow = head;
    let fast = head.next;
    
    while(slow!= fast){
        if(fast === null || fast.next === null){
            return null;
        }
        slow = slow.next;
        fast= fast.next.next;
    }
    
    let first = head;
    let second = fast;
    
    while(second.next != first){
        first = first.next;
        second = second.next;
    }
    
    return first;
};