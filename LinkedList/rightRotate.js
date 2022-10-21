function rotateLL(k){
	if(k>=this.length){
		return
	}

	let kth_node = this.head;
	//Get the kth node
	for(let idx=1;idx<k;idx++){
		kth_node=kth_node.next;
	}
	
	//Nodes from k+1 to end of list
	let remaining_nodes = kth_node.next;
	//Make kth node the last node
	kth_node.next = null;
	let ptr = remaining_nodes
	while(ptr.next!=null){
		ptr=ptr.next
	}
	ptr.next=this.head
	this.head=remaining_nodes;
}