function udpateLL() {
	let current = this.head;
	let prev_current = null;
	
	while(current.next!=null){
		prev_current = current;
		current=current.next;
	}
	prev_current.next = null;
	current.next = this.head;
	this.head=current;
}
