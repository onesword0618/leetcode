/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = (nums) => {
  let m = new Map(),
    left = new Map(),
    right = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (left.get(num) === undefined) left.set(num, i);
    right.set(num, i);
    m.set(num, m.get(num) + 1 || 1);
  }

  let degree = Math.max(...Array.from(m.values()));
  let elems = Array.from(m.keys()).filter((num) => m.get(num) === degree);
  let len = nums.length;

  for (let elem of elems) {
    len = Math.min(len, right.get(elem) - left.get(elem) + 1);
  }
  return len;
};
