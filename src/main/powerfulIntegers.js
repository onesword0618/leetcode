/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
module.exports = (x, y, bound) => {
  const set = new Set();
  const logBound = Math.log(bound);

  const xMax = x > 1 ? parseInt(logBound / Math.log(x)) : 1;
  const yMax = y > 1 ? parseInt(logBound / Math.log(y)) : 1;

  for (let i = 0; i <= xMax; i++) {
    for (let j = 0; j <= yMax; j++) {
      let val = x ** i + y ** j;
      if (val <= bound) set.add(val);
    }
  }

  return [...set];
};
