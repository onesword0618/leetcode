/**
 * @param {number[][]} A
 * @return {number}
 */
module.exports = matrixScore = function(A) {
 let x = A[0].length;
 let y = A.length;

 let sum = 2**(x-1)*y;

 for(let c = 1; c < x; c++) {
     let ones = 0;

     for(let r = 0; r < y; r++) {
         let row_would_flip = (A[r][0] === 0);
         ones += (row_would_flip) ? A[r][c]^1 : A[r][c];
     }

     let zeroes = y - ones;
     let col_would_flip = (zeroes > ones);
     sum += 2**(x-1-c)*((col_would_flip) ? zeroes : ones);
 }
 return sum;
};