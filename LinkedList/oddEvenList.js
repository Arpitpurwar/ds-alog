var oddEvenList = function(head) {
    if(!head){
        return head
    }
    let odd = head;
    let even = head.next;
    
    let evenFirst = even;
    while(1==1){
        if(!even || even.next === null){
            odd.next = evenFirst;
            break;
        }
        
        odd.next = even.next;
        odd = even.next;
        
        if(odd.next === null){
            even.next = null;
            odd.next = evenFirst;
            break;
        }
        
        even.next = odd.next;
        even = odd.next;
    }       
    
    console.log(head);
    return head
    
};