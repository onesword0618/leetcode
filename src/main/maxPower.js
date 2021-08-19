/**
 * @param {string} s
 * @return {number}
 */
module.exports = (s) => {
  let power = 1;
  let start = 0;

  for (let end = 1; end < s.length; end++) {
    if (s[start] !== s[end]) {
      start = end;
    }

    power = Math.max(power, end - start + 1);
  }

  return power;
};
