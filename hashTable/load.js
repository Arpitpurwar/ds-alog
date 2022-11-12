class HashTable {
  constructor() {
    this.tableSize = 5;
    this.hashTable = new Array(this.tableSize);
    this.elementSize = 0;
    this.loadFactor = 0;
    this.MAX_LOAD_FACTOR = 0.75;
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
    }
    this.elementSize += 1;
    let loadFactor = this.elementSize / this.tableSize;
    console.log("Current Load Factor : " + loadFactor);
    if (loadFactor > this.MAX_LOAD_FACTOR) {
      console.log("Rehashing");
      this.rehash();
      console.log("New size of the table is ", this.tableSize);
    }
  }

  rehash() {
    let temp = this.hashTable;
    this.elementSize = 0;
    this.tableSize *= 2;
    this.hashTable = new Array(this.tableSize);
    for (let row = 0; row < temp.length; row++) {
      if (!temp[row]) continue;
      let col = 0;
      while (col < temp[row].length) {
        this.set(temp[row][col][0], temp[row][col][1]);
        col += 1;
      }
    }
    console.log("Done Rehashing");
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
          this.elementSize--;
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
table.set("S", 222);
table.set("A", 222);
console.log(table.get("S"));
