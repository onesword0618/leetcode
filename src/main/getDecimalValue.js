/**
 * @param {ListNode} head
 * @return {number}
 */
module.exports = head => {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    if (!head) {
        return 0;
    }

    let str = '' + head.val;

    while (head.next) {
        head = head.next;
        str += head.val;
    }

    return parseInt(str, 2);
};