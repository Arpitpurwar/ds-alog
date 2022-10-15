class Queue{
	constructor(){
		this.data = [];
		this.front = 0;
		this.rear = 0;
	}

	enqueue(value){
		this.data[this.rear] = value;
		this.rear++;
	}

	dequeue(){
		let index = this.front;
		this.data[index] = null;
		this.front++
	}

	isEmpty(){
		return this.front === this.rear;
	}

	print(){
		for(let i = 0; i< this.data.length; i++){
			if(this.data[i]){
				console.log('queue element => ', this.data[i])
			}
		}
	}

	peak(){
		if(!this.isEmpty){
			return this.data[this.front];
		}
	}
}


let q = new Queue();

q.enqueue(4)
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.dequeue();
q.dequeue();
q.print()
// console.log(q)