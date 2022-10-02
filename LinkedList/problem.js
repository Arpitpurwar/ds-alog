class LLNode{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class SingleLL{
	constructor(){
		this.head = null;
		this.tail = this.head;
		this.length = 0;
	}

	size(){
		return `hello I am LL, My Size is ${this.length}`;
	}

	append(value){
		const newNode = new LLNode(value);
		const lastNode = this.tail;
		lastNode.next = newNode;
		this.tail = newNode;
		this.length++;
		return this.printList()
	}

	prepend(value){
		const newNode = new LLNode(value);
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return this.printList();
		}else{
			newNode.next = this.head;
			this.head = newNode;
			this.length++;
			return this.printList();
		}

	}

	printList(){
		let current = this.head;
		console.log('LL', current);
		while(current){
			console.log(current.value)
			console.log('--->');
			current = current.next;
		}
		return 'No LL exists'
	}

	insertAt(position, data){
		if(position === 0){
			return this.prepend(data);
		}else if(position === this.length){
			return this.append(data)
		}else{
			let i = 0;
			let prev,current = this.head;
			while(position > i){
				prev = current;
				current = current.next;
				i++;
			}

			let node = new LLNode(data);
			node.next = prev.next;
			prev.next = node;
			this.length++;
			return this.printList();
		}
	}

	getElementAtIndex(pos){
		if(pos < 0 || pos > this.length){
			return `hey, I don't have this index`
		}
		let i = 0;
		let current = this.head;
		while(current){
			if(i === pos){
				console.log('he;;;',current.value)
				return current.value
			}
			current = current.next;
			i++;
		}

	}

	removeAtStart(){
		if(!this.head){
			return false
		}else{
			let removeNode = this.head;
			this.head = removeNode.next;
			removeNode = null;
			this.length--;
			return this.printList() 
		}
	}

	removeAtEnd(){
		let prev, current = this.head;
		while(current.next){
			prev = current
			current = current.next;
		}	
		let removNode = current;
		removNode = null;
		prev.next = null;
		this.tail = prev;
		this.length--;
		return this.printList();

	}
	removeAt(pos){
		if(pos == 0){
			return this.removeAtStart()
		}else if(pos === this.length){
			return this.removeAtEnd()
		}
		else{
			let prev, current = this.head;
			let count = 0;
			while(count < pos){
				prev = current;
				current = current.next;
				count++;
			}

			prev.next = current.next;
			current = null;
			this.length--;
			return this.printList()
		}
	}
	reverse(){
		let current = this.head;
		this.tail = this.head
		let prev = null;
		while(current){
			let n = current.next;
			current.next = prev;
			prev = current;
			current = n;
			
		}
		this.head = prev;
		return this.printList()
	}

	rotate(){
		let current = this.head;

		while(current.next){
			current = current.next;
		}
		console.log(current);
		let final = this.head;
		this.head = this.head.next;
		final.next = current;
		console.log("final",final)
		console.log(this.head);
	}

	findMiddle(){
		let fast = this.head;
		let slow = this.head;

		while(fast != null  && fast.next != null){
			slow = slow.next;
			fast = fast.next.next
		}

		let curr = slow;
		let prev = null;

		while(curr){
			let n = curr.next;
			curr.next = prev;
			prev = curr;
			curr = n;
		}
		
		let temp = null;
		let first = this.head;
		let second = prev
		while(second.next != null){
			temp = first.next;
			first.next = second;
			first = temp;
			temp = second.next;
			second.next = first;
			second = temp;
		}
	}
}

const ll = new SingleLL()
ll.prepend(4);
ll.prepend(5)
ll.prepend(2)
ll.prepend(6);
ll.append(8);
ll.insertAt(3,9);
ll.findMiddle()
console.log(ll)
ll.printList()