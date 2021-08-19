/**
 * @param {character[][]} board
 * @return {number}
 */
module.exports = (board) => {
  const [rows, cols] = [new Array(8).fill(""), new Array(8).fill("")];
  let rookRow, rookCol;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      rows[i] += board[i][j];
      cols[i] += board[j][i];
      if ("R" === board[i][j]) [rookRow, rookCol] = [i, j];
    }
  }

  let captures = 0;
  if (/p\.*R/.test(rows[rookRow])) {
    captures++;
  }

  if (/R\.*p/.test(rows[rookRow])) {
    captures++;
  }

  if (/p\.*R/.test(cols[rookCol])) {
    captures++;
  }

  if (/R\.*p/.test(cols[rookCol])) {
    captures++;
  }
  return captures;
};
