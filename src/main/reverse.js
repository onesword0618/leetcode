/**
 * @param {number} x
 * @return {number}
 */
module.exports = (arg) => {
  const checkArg = arg < 0 ? -1 : 1;
  const splitNumber = Number(
    String(Math.abs(arg)).split("").reverse().join("")
  );
  const limit = 2147483648; // -2,147,483,648 ～ 2,147,483,647
  return splitNumber > limit ? 0 : splitNumber * checkArg;
};
