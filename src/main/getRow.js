/**
 * @param {number} rowIndex
 * @return {number[]}
 */
module.exports = (rowIndex) => {
  let result = new Array(rowIndex + 1);
  let hold;

  for (let i = 0; i <= rowIndex; i++) {
    result[i] = result[0] = hold = 1;

    for (let j = 1; j < i; j++) {
      let temp = result[j];
      result[j] = result[j] + hold;
      hold = temp;
    }
  }
  return result;
};
