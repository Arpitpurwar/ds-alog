class Node{
	constructor(val){
		this.value = val;
		this.next = null;
	
	}
}

class CLL{
	constructor(){
		this.head = null;
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
			let current = this.tail;
			let prev;
			do{
				console.log(current.value);
				prev = current;
				current = current.next;
			}while(current != this.tail)

			prev.next = node;
			node.next = current;
			this.tail = node;
			this.length++;
			return this.printList()
		}

	}

	printList(){
		let current = this.tail;
		do{
			console.log(current.value);
			current = current.next;
		}
		while(current != this.tail)
	}
}

let ll = new CLL()
ll.prepend(2)
ll.prepend(5)
console.log(ll)
