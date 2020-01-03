function ListNode(val) {
    this.val = val;
    this.next = null;
};

let mergeTwoLists = function (list1, list2) {
    let response = new ListNode(-1);
    let head = response;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            response.next = list1;
            list1 = list1.next;
        } else {
            response.next = list2;
            list2 = list2.next;
        };
        response = response.next;
    };

    if (list1 != null) {
        response.next = list1;
    } else {
        response.next = list2;
    };
    return head.next;
};
module.exports = mergeTwoLists;

