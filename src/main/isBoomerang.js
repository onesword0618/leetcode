/**
 * @param {number[][]} points
 * @return {boolean}
 */
module.exports = (points) => {
  points.sort((a, b) => a[0] - b[0]);
  const [x0, y0] = points[0];
  const [x1, y1] = points[1];
  const [x2, y2] = points[2];

  const equal0and1 = x0 === x1 && y0 === y1;
  const equal1and2 = x1 === x2 && y1 === y2;
  const equal0and2 = x0 === x2 && y0 === y2;
  const allPointsUnique = !equal0and1 && !equal1and2 && !equal0and2;

  const k1 = (x1 - x0) / (y1 - y0);
  const k2 = (x2 - x1) / (y2 - y1);

  return allPointsUnique && k2 !== k1;
};
