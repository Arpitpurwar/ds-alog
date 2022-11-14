class MaxHeap {
  constructor() {
    //The initial value of heap array is empty array
    this.heap = [];
  }

  insert(value) {
    //Step 1 : Push the value to end of array
    this.heap.push(value);

    //If there is nothing in heap dont proceed, return at this step
    if (!this.heap.length === 1) return;

    //Initial n value
    let n = this.heap.length - 1;
    //Set 2 : Swap the parent elements till it reaches 0 or parent is greater
    // than children
    while (n !== 0) {
      //Calculate parent Index
      const parentIndex = Math.floor((n - 1) / 2);
      //If parent is greater than child, then all elements are in place
      if (this.heap[parentIndex] > this.heap[n]) return;
      //Swap parent with child
      let temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[n];
      this.heap[n] = temp;
      //parent becomes new n
      n = parentIndex;
    }
  }

  extractMax() {
    //Check if heap has any value, if not return null
    if (!this.heap.length) return null;

    //Step 1 : Max value in heap is the first element in array
    const maxVal = this.heap[0];
    //Step 2 : Replacing first element with last element
    const lastVal = this.heap.pop();
    //Edge condition to check if heap has only one element
    if (!this.heap.length) return maxVal;
    //Replace 0 with lastVal
    this.heap[0] = lastVal;
    let n = 0;
    //Step 4 : Reperat the process till node is in place
    while (n < this.heap.length) {
      //Step 3 : Set left and right child index
      const leftIndex = 2 * n + 1;
      const rightIndex = 2 * n + 2;
      //if it has no child
      if (leftIndex >= this.heap.length) break;
      //if only left child is present
      if (rightIndex >= this.heap.length) {
        //if child is less than node
        if (this.heap[leftIndex] < this.heap[n]) break;
        //if not swap
        this._swap(n, leftIndex);
        //set new child as current child
        n = leftIndex;
      } else {
        //get the highest child
        const highestIndex =
          this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex;
        //if highest child is less than node
        if (this.heap[highestIndex] < this.heap[n]) break;
        //if not swap
        this._swap(n, highestIndex);
        //set newchild as current
        n = highestIndex;
      }
    }
    return maxVal;
  }

  _swap(pos1, pos2) {
    const temp = this.heap[pos1];
    this.heap[pos1] = this.heap[pos2];
    this.heap[pos2] = temp;
  }

  getMax() {
    return this.heap[0];
  }
}
