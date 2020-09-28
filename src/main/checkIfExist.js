/**
 * @param {number[]} arr
 * @return {boolean}
 */
module.exports = arr => {
    let prev = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (prev.has(arr[i] * 2) || prev.has(arr[i] / 2)) return true;
        prev.add(arr[i]);
    }
    return false;
};