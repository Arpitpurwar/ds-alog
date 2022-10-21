function merge(l1, l2) {
  let curr_l1 = l1.head;
  let curr_l2 = l2.head;
  let next_curr_l1 = null;
  let next_curr_l2 = null;

  while (curr_l1 != null && curr_l2 != null) {
    next_curr_l1 = curr_l1.next;
    next_curr_l2 = curr_l2.next;

    curr_l2.next = next_curr_l1;
    curr_l1.next = curr_l2;

    curr_l2 = next_curr_l2;
    curr_l1 = next_curr_l1;

    l2.head = curr_l2;
  }
}
