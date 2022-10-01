class DoubleLLNode{
	constructor(value){
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class DoubleLL{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	append(data){
		const node = new DoubleLLNode(data);
		const temp = this.tail;
		node.prev = temp;
		temp.next = node;
		this.tail = node;
		this.length++;
		return this.printList();
	}

	prepend(data){
		let node = new DoubleLLNode(data);
		if(!this.head){
			this.head = node;
			this.tail = node;
			this.length++;
			return this.printList();
		}else{
			let first = this.head;
			node.next = first;
			first.prev = node;
			this.length++;
			this.head = node;
			return this.printList();
		}

	}

	insertAt(pos, data){
		if(pos === 0){
			return this.prepend()
		}
		if(pos === this.length-1){
			return this.append()
		}
		if(pos < 0 || pos > this.length-1){
			return `can 't  insert at this index/position`
		}
		let node = new DoubleLLNode(data);
		let count = 0;
		let current = this.head;

		while(count < pos){
			count++;
			current = current.next;
		}

		let prev = current.prev;
		node.next = current;
		node.prev = prev;
		prev.next = node;
		current.prev = node;
		this.length++;
		return this.printList()
	}

	printList(){
		let current = this.head;
		while(current){
			console.log(current.value);
			current = current.next;
		}
	}

	removeAtStart(){
		if(this.length === 1){
			this.head = null;
			this.tail = null;
			this.length--;
		}
		if(this.head){
			let first = this.head;
			let second = first.next;
			second.prev = null;
			first = null;
			this.head = second;
			this.length--;
		}
	}

	removeAtEnd(){
		if(this.length === 1){
			this.head = null;
			this.tail = null;
			this.length--;
		}
		
		let last = this.tail;
		let secondLast = last.prev;
		secondLast.next = null;
		last = null;
		this.tail = secondLast;
		this.length--;
	}

	removeAt(pos){
		if(pos === 0){
			return this.removeAtStart()
		}
		else if(pos === this.length- 1){
			return this.removeAtEnd()
		}
		if(pos < 0 || pos > this.length-1){
			return 'Bro index does not exist';
		}

		let count = 0;
		let current = this.head;

		while(count < pos){
			count++;
			current = current.next;
		}

		let prev = current.prev;
		prev.next = current.next;
		current.next.prev = prev;
		this.length--;
		current = null;
	}
}

const ll = new DoubleLL()

ll.prepend(3)
ll.prepend(5)
// ll.append(4)
// ll.insertAt(1,9)
ll.removeAtEnd()

console.log(ll)

