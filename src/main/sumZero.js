/**
 * @param {number} n
 * @return {number[]}
 */
module.exports = n => {
    const nBy2 = Math.trunc(n / 2), arr = [];
    
    for (let i = 0; i < nBy2; ++ i) {
        let num = nBy2 - i;
        arr.push(-num);
        arr.push(num);
    }
    arr.length !== n && arr.push(0);
    return arr;
};