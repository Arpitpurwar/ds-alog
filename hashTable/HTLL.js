class Node {
  constructor(k, v) {
    this.key = k;
    this.value = v;
    this.next = null;
  }
}
class HashTable {
  constructor() {
    this.tableSize = 8;
    this.hashTable = new Array(this.tableSize);
    this.head = null;
    this.hashConstant = 0.7;
    this.elementSize = 0;
    this.loadFactor = 0;
    this.MAX_LOAD_FACTOR = 0.65;
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    hash = Math.floor(
      (hash * this.hashConstant - Math.floor(hash * this.hashConstant)) <<
        Math.log2(this.tableSize)
    );
    return hash % this.hashTable.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.hashTable[index] != undefined) {
      let head = this.hashTable[index];
      let prev;
      while (head.next) {
        if (head.key == key) {
          head.value = value;
          return;
        }
        head = head.next;
      }
      var node = new Node(key, value);
      head.next = node;
    } else {
      console.log("Adding...");
      var node = new Node(key, value);
      node.next = this.hashTable[index];
      this.hashTable[index] = node;
      console.log("Added");
    }
    this.elementSize += 1;
    let loadFactor = this.elementSize / this.tableSize;
    console.log("Element added, load factor", loadFactor);
    if (loadFactor > this.MAX_LOAD_FACTOR) {
      console.log("Rehashing");
      this.rehash();
      console.log("Done Rehashing");
    }
  }
  rehash() {
    let temp = this.hashTable;
    this.tableSize *= 2;
    this.hashTable = new Array(this.tableSize);
    this.elementSize = 0;
    for (let idx = 0; idx < temp.length; idx++) {
      if (temp[idx]) {
        let head = temp[idx];
        while (head) {
          this.set(head.key, head.value);
          head = head.next;
        }
      }
    }
  }

  get(key) {
    const target = this._hash(key);
    if (this.hashTable[target]) {
      let head = this.hashTable[target];
      while (head) {
        if (head.key == key) {
          return head.value;
        }
        head = head.next;
      }
      return undefined;
    }
  }
  display() {
    for (let idx = 0; idx < this.hashTable.length; idx++) {
      if (this.hashTable[idx]) {
        let head = this.hashTable[idx];
        while (head) {
          console.log("Element : " + head.key, " | ", head.value);
          head = head.next;
        }
      }
    }
  }
}

const table = new HashTable();
table.set("abc", 220);
table.set("xyz", 450);
table.set("wwe", 550);
table.set("raw", 230);
table.set("test", 420);
table.set("ǻ", 200);
table.display();
console.log(table.get("wwe"));
