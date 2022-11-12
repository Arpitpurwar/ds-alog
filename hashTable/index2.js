class HashTable{
	constructor(){
		this.arr = new Array(255);
		this.size = 0;
	}

	_hash(key){
		let hash = 0;
		// id
		// i =105
		// d = 100
		for(let i = 0; i< key.length; i++){
			hash += key.charCodeAt(i)
		}
		return hash % this.arr.length;
	}

	set(key,value){
		let index = this._hash(key);
		this.arr[index] = [key,value];
		this.size++;
	}

	get(key){
		let index = this._hash(key);
		return this.arr[index];
	}
	remove(key){
		let index = this._hash(key);
		if(this.arr[index] && this.arr[index].length){
			this.arr[index] = [];
			this.size--;
			return true;
		}else{
			return false;
		}

	}
}

let map = new HashTable();

map.set('id', 1);
map.set('name', 'Arpit');
console.log(map.get('name'))
console.log(map.get('id'));
console.log(map.remove("id"))
console.log(map.remove("mannnenne"));
console.log(map.get("id"));
console.log(map.size);