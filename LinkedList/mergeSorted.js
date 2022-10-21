/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let msl = new ListNode();
  let temp = msl;
  let l1 = list1;
  let l2 = list2;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      temp.next = l1;
      temp = temp.next;
      l1 = l1.next;
    } else {
      temp.next = l2;
      temp = temp.next;
      l2 = l2.next;
    }
  }

  if (!l1) {
    temp.next = l2;
  }

  if (!l2) {
    temp.next = l1;
  }

  return msl.next;
};
