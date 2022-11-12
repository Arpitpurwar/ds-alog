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
    if (this.hashTable[index]) {
      for (let i = 0; i < this.hashTable[index].length; i++) {
        if (this.hashTable[index][i][0] == key) {
          this.hashTable[index][i][1] = value;
          return;
        }
      }

      this.hashTable[index].push([key, value]);
    } else {
      this.hashTable[index] = [];
      this.hashTable[index].push([key, value]);
      this.tableSize++;
    }
  }

  get(key) {
    const target = this._hash(key);
    if (this.hashTable[target]) {
      for (let i = 0; i < this.hashTable.length; i++) {
        if (this.hashTable[target][i][0] === key) {
          return this.hashTable[target][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.hashTable[index] && this.hashTable[index].length) {
      for (let i = 0; i < this.hashTable.length; i++) {
        if (this.hashTable[index][i][0] === key) {
          this.hashTable[index].splice(i, 1);
          this.tableSize--;
          return true;
        }
      }
    } else {
      return false;
    }
  }
}

const table = new HashTable();

table.set("Spain", 220);
table.set("ǻ", 200);
console.log(table.get("ǻ"));
// console.log(table.get("Spain"));
