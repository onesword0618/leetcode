/**
 * @param {number} N
 * @return {number}
 */
module.exports = (N) => {
  return Math.max(
    0,
    ...N.toString(2)
      .split("1")
      .slice(1, -1)
      .map((gap) => gap.length + 1)
  );
};
