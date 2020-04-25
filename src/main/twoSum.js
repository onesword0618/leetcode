/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
module.exports = (numbers, target) => {
    let scanned = [];
    for (let i = 0; i < numbers.length; i++) {

        if (scanned.includes(numbers[i])) {
            continue;
        } else {
            scanned.push(numbers[i]);
        };

        if (numbers.findIndex((elm, idx) => {
                return elm === target - numbers[i] && idx !== i;
            }) !== -1) {
            return [i + 1, numbers.findIndex((elm, idx) => {
                return elm === target - numbers[i] && idx !== i
            }) + 1];
        };
    };
};