/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const answer = new ListNode(0);
    let temp = answer;
    let next = 0;
    while(l1 && l2) {
        temp.next = new ListNode();
        temp = temp.next;
        let sum = l1.val + l2.val + next;
        if(sum >= 10) {
            temp.val = sum - 10;
            next = 1;
        } else {
            temp.val = sum;
            next = 0;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1) {
        temp.next = new ListNode();
        temp = temp.next;
        let sum = l1.val + next;
        if(sum >= 10) {
            temp.val = sum - 10;
            next = 1;
        } else {
            temp.val = sum;
            next = 0;
        }
        l1 = l1.next;
    }
    while(l2) {
        temp.next = new ListNode();
        temp = temp.next;
        let sum = l2.val + next;
        if(sum >= 10) {
            temp.val = sum - 10;
            next = 1;
        } else {
            temp.val = sum;
            next = 0;
        }
        l2 = l2.next;
    }
    if(next === 1) {
        temp.next = new ListNode(next);
    }
    return answer.next;
};