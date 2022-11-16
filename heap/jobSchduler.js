/**
Reference: https://leetcode.com/problems/task-scheduler/
Problem – You have an office where N number of employees work. Now, you have to assign a job among
them. Now, there is one condition that you cannot assign the same person a task in between x hours. This
means an employee can only get a task again after x hours. One employee takes 1 hour to complete one
task and after that, you can assign that task to another employee. Now you have to return the order in that
every employee got his tasks and they have completed it? We can accept all valid orders.
Example -
Input - [“Sanket”, “Sanket”,“Sanket”,”Riya”, “Riya”, “Riya”], X = 2
Output - Sanket -> Riya -> idle -> Sanket -> Riya -> idle -> Sanket -> Riya
Input - ["Rohit","Rohit","Rohit","Rohit","Rohit","Rohit","Ankit","Astha","Vishwa","Arnab","Sanket","Riya"], X = 2
Output: Rohit -> Ankit -> Astha -> Rohit -> Vishwa -> Arnab -> Rohit -> Sanket -> Riya -> Rohit -> idle -> idle ->
Rohit -> idle -> Rohit

Time Complexity:,O(result),-->,As,we,only,co2pute,till,the,ti2e,counter,is,incre2ented.
See,there,will,not,be,always,fixed,co2plexity,as,it,2ostly,depends,on,X,as,well.,So2e,ti2e,just,add,the,
idle,ti2e,we,are,incre2enting,ti2e.,But,we,can,deduce,the,co2plexity,as,O((*X)logK).,ow,,here,,is,the,
total,nu2ber,of,ele2ents,,X,is,the,blocked,ti2e,and,k,is,distinct,e2ployees.
Let’s,analyse,why.,We,will,iterate,till,the,heap,will,be,e2pty.,It,will,take,,iteration.,In,each,iteration,,we,are,
using,a,loop,for,X,ti2e.,hen,logK,because,we,will,heapify,after,every,iteration,on,k,ele2ents.
 */

class Heap {
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator;
  }

  swap(index1, index2) {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }

  bottomUp(index) {
    if (index === 0) return;
    const data = this.data;

    const parentIndex = Math.floor((index - 1) / 2);

    if (this.comparator(data[index], data[parentIndex])) {
      this.swap(parentIndex, index);
      this.bottomUp(parentIndex);
    }
  }

  topBottom(index) {
    const n = this.data.length;
    const data = this.data;

    let nextIndexTochoose = index;
    const lefti = index * 2 + 1;
    const righti = lefti + 1;

    if (lefti < n && this.comparator(data[lefti], data[nextIndexTochoose])) {
      nextIndexTochoose = lefti;
    }

    if (righti < n && this.comparator(data[righti], data[nextIndexTochoose])) {
      nextIndexTochoose = righti;
    }

    if (nextIndexTochoose !== index) {
      this.swap(index, nextIndexTochoose);
      this.topBottom(nextIndexTochoose);
    }
  }

  size() {
    return this.data.length;
  }

  peek() {
    if (this.size() <= 0) return null;
    return this.data[0];
  }

  add(val) {
    this.data.push(val);
    this.bottomUp(this.data.length - 1);
  }

  // delete top element
  poll() {
    if (this.size() <= 0) return;

    if (this.size() === 1) {
      this.data.pop();
      return;
    }

    const data = this.data;

    data[0] = data[data.length - 1];
    data.pop();

    this.topBottom(0);
  }
}

let leastInterval = (employee, X) => {
  let employee_counter = {};
  for (let i = 0; i < employee.length; i++) {
    if (employee[i] in employee_counter) {
      employee_counter[employee[i]]++;
    } else {
      employee_counter[employee[i]] = 1;
    }
  }

  let comparator = (a, b) => {
    return a[1] > b[1];
  };
  let pq = new Heap(comparator);
  for (let key in employee_counter) {
    pq.add([key, employee_counter[key]]);
  }
  let result = [];

  while (pq.size() > 0) {
    let add_back = [];

    for (let i = 0; i <= X; i++) {
      if (pq.size() > 0) {
        let root = pq.peek();
        result.push(root[0]);
        pq.poll();
        root[1]--;
        if (root[1] > 0) {
          add_back.push(root);
        }
      } else result.push("idle");
      if (pq.size() == 0 && add_back.length == 0) {
        break;
      }
    }
    for (let i in add_back) {
      pq.add(add_back[i]);
    }
  }
  return result;
};

const emp = [
  "Rohit",
  "Rohit",
  "Rohit",
  "Rohit",
  "Rohit",
  "Rohit",
  "Ankit",
  "Astha",
  "Vishwa",
  "Arnab",
  "Sanket",
  "Riya",
];

console.log(leastInterval(emp, 2));
