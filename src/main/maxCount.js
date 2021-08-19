/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
module.exports = (m, n, ops) => {
  return (
    (Math.min(...ops.map((e) => e[0])) <= m
      ? Math.min(...ops.map((e) => e[0]))
      : m) *
    (Math.min(...ops.map((e) => e[1])) <= n
      ? Math.min(...ops.map((e) => e[1]))
      : n)
  );
};
