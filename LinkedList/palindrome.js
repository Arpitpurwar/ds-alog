var isPalindromeRecursive = function(head) {
    if(!head){
        return head;
    }
    
    let slow = head;
    let faster = head;
    
    while(faster != null && faster.next != null){
        slow = slow.next;
        faster = faster.next.next;
    }
    
    let middle = slow;
    let reverse = null;

    while(middle){
        let n = middle.next;
        middle.next = reverse;
        reverse = middle;
        middle = n;
    }

    let first = head;
    let second = reverse;
    let temp = null

    while(first.next != null){
        if(first.val != second.val){
            return false
        }
        first = first.next;
        second = second.next;
    }
    
    
    return true;
    
    
};

var isPalindromeStack = function(head) {
    if(!head){
        return head;
    }
  let stack = [];
    
    let curr = head;
    while(curr){
        stack.push(curr.val);
        curr = curr.next;
    }
    
    let temp = head;
    while(stack.length > 0){
        let element = stack.pop();
        if(temp.val !== element){
            return false
        }
        temp = temp.next;
    }
    return true;
};