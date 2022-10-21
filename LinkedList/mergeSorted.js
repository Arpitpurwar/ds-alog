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
  let mergedList = new ListNode();
  let ptr = mergedList;

  let l1 = list1;
  let l2 = list2;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      ptr.next = l1;
      ptr = ptr.next;
      l1 = l1.next;
    } else if (l1.val > l2.val) {
      ptr.next = l2;
      ptr = ptr.next;
      l2 = l2.next;
    }
  }

  while (l1 != null) {
    ptr.next = l1;
    ptr = ptr.next;
    l1 = l1.next;
  }

  while (l2 != null) {
    ptr.next = l2;
    ptr = ptr.next;
    l2 = l2.next;
  }

  return mergedList.next;
};
