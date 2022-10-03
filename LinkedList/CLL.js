class Node{
	constructor(val){
		this.value = val;
		this.next = null;
	
	}
}

class CLL{
	constructor(){
		this.tail = null;
		this.length = 0;
	}

	prepend(val){
		let node = new Node(val);
		if(!this.tail){
			this.tail = node;
			this.tail.next = node;
			this.length++;
			return this.printList()
		}else{
			let current = this.tail.next;
			node.next = current.next;
			current.next = node;
			this.length++;
			return this.printList()
		}

	}

	printList(){
		let current = this.tail.next;

		do{
			//console.log("current",current)
			console.log(current.value);
			current = current.next;
		}while(current != this.tail.next)
	}

	removeAt(index) {
    //   if index is 0
    if (index == 0) {
      if (!this.tail.next) {
        return false;
      }
      let current = this.tail.next;
      this.tail.next = current.next;
      current = null;

      this.length--;
    } else if (index < 0 || index >= this.length) {
      console.log('Array index out of bounds enter valid index');
    } else {
      let current, previous;
//   current is set to head which is at tail.next
      current = this.tail.next;
      let count = 0;
      while (count < index) {
        count++;
        previous = current; // set previous to current
        current = current.next; // set current to next of current
      }

      previous.next = current.next; // set next of previous to next of current
      current = null; // set current element to be deleted as null

      this.length--;
    }
  }

}

let ll = new CLL()
ll.prepend(4)
 ll.prepend(6)
// ll.prepend(5)
ll.printList()
console.log(ll)
