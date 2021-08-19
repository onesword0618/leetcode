/**
 * @param {number} numRows
 * @return {number[][]}
 */
module.exports = (numRows) => {
  let pascal = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    let lastRow = pascal[i];
    const nextRow = [
      [0, ...lastRow],
      [...lastRow, 0],
    ].reduce(
      (acc, curr, idx) =>
        idx === 0 ? curr : curr.map((num, i) => num + acc[i]),
      []
    );

    pascal.push(nextRow);
  }
  return numRows >= 1 ? pascal : [];
};
