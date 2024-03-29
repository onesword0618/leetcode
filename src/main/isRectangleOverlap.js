/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
module.exports = (rec1, rec2) => {
  return (
    rec2[0] < rec1[2] &&
    rec2[1] < rec1[3] &&
    rec2[2] > rec1[0] &&
    rec2[3] > rec1[1]
  );
};
