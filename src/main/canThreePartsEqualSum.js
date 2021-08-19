/**
 * @param {number[]} A
 * @return {boolean}
 */
module.exports = (A) => {
  let sum = 0;
  for (const a of A) {
    sum += a;
  }

  if (sum % 3 !== 0) {
    return false;
  }

  let avg = parseInt(sum / 3);
  let cur = 0;
  let count = 0;

  for (const a of A) {
    cur += a;
    if (cur == avg) {
      count++;
      cur = 0;
    }
  }

  return count >= 3;
};
