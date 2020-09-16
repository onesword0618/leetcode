/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = nums => {
    for (let startVal = 1, acc = 1; true; startVal++, acc = startVal) {
        if (nums.every(n => 0 < (acc += n))) {
            return startVal;
        }
    }
};