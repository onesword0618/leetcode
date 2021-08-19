/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
module.exports = (widths, S) => {
  return [...S]
    .map((c) => widths[c.charCodeAt(0) - 97])
    .reduce(
      (acc, curr) => [
        acc[0] + (100 < acc[1] + curr ? 1 : 0),
        100 < acc[1] + curr ? curr : acc[1] + curr,
      ],
      [S.length ? 1 : 0, 0]
    );
};
