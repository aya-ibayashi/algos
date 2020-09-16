// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val) {
    this.val = val;
    this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
    if(l1 === undefined && l2 === undefined){
        return undefined;
    }
    if(l1=== undefined){
        return l2;
    }
    if(l2 === undefined){
        return l1;
    }

    let runner1 = l1;
    let runner2 = l2;
    let l3 = new ListNode;
    let runner3 = l3;
    let carry=0;
    
    while(runner1 && runner2){
        let temp = runner1.val + runner2.val + carry;
        carry = 0;
        if(temp >= 10){
            carry = 1;
        }
        runner3.val = temp % 10;
        runner1 = runner1.next;
        runner2 = runner2.next;
        if (runner1 && runner2){
            runner3.next = new ListNode(0);
            runner3 = runner3.next; 
        }
    }
 
    let longer = null;
    if (runner1){
        longer = runner1;
    } else {
        longer = runner2;
    }
    while(longer){
        runner3.next = new ListNode(longer.val);
        runner3= runner3.next;
        if (carry ===1){
            runner3.val +=1;
            carry=0;
        }
        if(runner3.val >= 10){
            carry = 1;
            runner3.val = runner3.val % 10
        }
        longer = longer.next;
    }
    if (carry == 1){
        runner3.next = new ListNode(1)
        
    }   
    return l3;
    
};