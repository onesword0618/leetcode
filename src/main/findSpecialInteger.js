/**
 * @param {number[]} arr
 * @return {number}
 */
module.exports = arr => {
    let percentage = 0.25 * arr.length, len = 1;
    for (i = 0; i < arr.length; i++) {
        if (len > percentage) {
            return arr[i];
        }
        if (arr[i] == arr[i + 1]) {
            len++;
        } else {
            len = 1;
        }
    }
};