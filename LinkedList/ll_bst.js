/**
Given a sorted linked list, say L, your task is to convert it into a balanced binary tree keeping the time complexity as O(n). 
Note: In a balance binary tree the  difference between the height of the left and the right subtree is never greater than 1.

Input:
5 4 1 0 -3 -4 -5

Output:
0 4 5 1 -4 -3 -5
	  
Explaination:
On converting the linked list 5 4 1 0 -3 -4 -5 to binary tree, we will get:

Expected:
Time Complexity: O(n)
Auxiliary Space Complexity: O(n)
https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 */

var sortedListToBST = function (head) {
  //     Converting LL into array
  let arr = getarr(head);

  //     Now, using tree function to get an tree out of SORTED ARRAY
  return tree(arr);
};

function getarr(head) {
  if (!head) return [];
  let temp = head;
  let out = [];
  while (temp) {
    out.push(temp.val);
    temp = temp.next;
  }
  return out;
}

function tree(nums, start = 0, end = nums.length - 1) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(mid, end)
    let root = new TreeNode(nums[mid]);
    root.left = tree(nums, start, mid - 1);
    root.right = tree(nums, mid + 1, end);
    return root;
  }
  return null;
}
