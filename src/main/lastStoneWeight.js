/**
 * @param {number[]} stones
 * @return {number}
 */
module.exports = lastStoneWeight = function (stones) {
  return 1 === stones.length
    ? stones[0]
    : lastStoneWeight(
        stones.sort((a, b) => a - b).concat(stones.pop() - stones.pop())
      );
};
