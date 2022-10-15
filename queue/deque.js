class Deque{
	constructor(){
		this.data = [];
		this.front = 0;
		this.rear = 0;
	}

	insertAtFront(value){
		if(this.isEmpty()){
			this.insertAtRear(value);
		}
		else if(this.front > 0){
			this.data[this.front-1] = value;
			this.front--;
		}
		else{
			for(let i = this.data.length; i>0; i--){
				this.data[i] = this.data[i-1];
			}
			this.data[0] = value;
			this.rear++;
		}
	}

	insertAtRear(value){
		this.data[this.rear] = value;
		this.rear++;
	}

	deleteAtFront(){
		if(!this.isEmpty()){
			let index = this.front;
			this.data[index] = null;
			this.front++;
		}

	}

	deleteAtRear(){
		if(!this.isEmpty()){
			this.data[this.rear - 1] = null;
			this.rear--;
		}else{
			throw new Error('underflow scenario');
		}

	}

	isEmpty(){
		return this.rear===this.front;
	}

	print(){
		for(let i =0; i< this.data.length; i++){
			if(this.data[i]){
				console.log('Deque Elemts', this.data[i])
			}
		}
	}
}


let dq = new Deque();

dq.insertAtFront(4);
dq.insertAtRear(5);
dq.insertAtRear(3);
dq.insertAtFront(8);
dq.insertAtFront(9);
dq.deleteAtRear()
dq.deleteAtFront()

dq.print()