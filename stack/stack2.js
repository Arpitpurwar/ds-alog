class Stack{
	constructor(){
		this.data = [];
		this.top = -1;
	}

	push(value){
		this.top++;
		this.data[this.top] = value;
	}

	pop(){
		if(this.isEmpty()){
			throw new Error('Underflow stack')
		}
		this.data.pop();
		this.top--;
	}

	peak(){
		if (this.isEmpty()) {
          return null
        }
		return this.data[this.top];
	}

	print(){
		let top = this.top;

		while(top > -1){
			console.log('Stack Elements', this.data[top])
			top = top-1;
		}
	}

	isEmpty(){
		return this.top === -1;
	}

	insertAtBottom(value){
		if(this.isEmpty()){
			this.push(value);
			return;
		}
		else{
			let temp = this.peak();
			this.pop();
			this.insertAtBottom(value);
			this.push(temp);
		}
	}
}


let stack = new Stack()
stack.push(4)
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(1);
stack.print()
// stack.pop();
// stack.pop()
stack.insertAtBottom(0);
console.log("=====>>> after inserting new at bottom")
stack.print();
console.log(stack);