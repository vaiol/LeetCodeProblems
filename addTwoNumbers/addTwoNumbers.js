/**
 * @typedef ListNode {{ val: number, next: ListNode }}
 */

/**
 * #2 #Medium
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let res = {};
    let val = 0;
    let tmp = res;
    while(l1 || l2) {
        val = val + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        tmp = tmp.next = { val: val % 10 };
        val = ~~(val / 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if (val) {
        tmp.next = { val, next: null }
    } else {
        tmp.next = null;
    }
    return res.next
};

module.exports = {
    addTwoNumbers
};
