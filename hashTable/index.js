class HashTable {
  constructor() {
    this.hashTable = new Array(255);
    this.tableSize = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.hashTable.length;
  }

  set(key, value) {
    const index = this._hash(key);
    this.hashTable[index] = [key, value];
    this.tableSize++;
  }
  get(key) {
    const target = this._hash(key);
    return this.hashTable[target];
  }

  remove(key) {
    const index = this._hash(key);
    if (this.hashTable[index] && this.table[index].length) {
      this.hashTable[index] = [];
      this.tableSize--;
      return true;
    } else {
      return false;
    }
  }
}

const table = new HashTable();
table.set("Ikaris", 400);
table.set("Real", 500);
table.set("Jennifer", 20);
console.log(table.get("Ikaris"));
console.log(table.get("Real"));
console.log(table.get("Jennifer"));
console.log(table.remove("Real")); // true
