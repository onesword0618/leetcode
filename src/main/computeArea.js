/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
module.exports = computeArea = (A, B, C, D, E, F, G, H) => {
  let area = (C - A) * (D - B) + (G - E) * (H - F);
  if (!(C <= E || D <= F || G <= A || H <= B)) {
    area -=
      (Math.min(C, G) - Math.max(E, A)) * (Math.min(D, H) - Math.max(F, B));
  }
  return area;
};
