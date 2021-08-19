/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
module.exports = slowestKey = (rt, kp) =>
  String.fromCharCode(
    Math.max(
      ...rt.map((t, idx) => (t - rt[idx - 1] || t) * 1000 + kp.charCodeAt(idx))
    ) % 1000
  );
