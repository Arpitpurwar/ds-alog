/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let left = head;
  while (--k) {
    left = left.next;
  }

  let last = left;
  let right = head;

  while (last.next != null) {
    right = right.next;
    last = last.next;
  }

  let temp = right.val;
  right.val = left.val;
  left.val = temp;

  return head;
};
