/**
 * @param {string} moves
 * @return {boolean}
 */
module.exports = (moves) => {
  return (
    moves
      .split("")
      .reduce(
        (p, m) => [
          p[0] + (m === "R") - (m === "L"),
          p[1] + (m === "U") - (m === "D"),
        ],
        [0, 0]
      )
      .join("") === "00"
  );
};
