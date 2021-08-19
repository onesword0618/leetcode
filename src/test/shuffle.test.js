const shuffle = require("./../main/shuffle");
//   Question
//      Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//      Return the array in the form [x1,y1,x2,y2,...,xn,yn].

describe("引数の配列を指定したルールごとに並び変えて配列を返却する", () => {
  test("[2,5,1,3,4,7],3の引数を渡して[2,3,5,4,1,7]が返却される", () => {
    expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toEqual(
      expect.arrayContaining([2, 3, 5, 4, 1, 7])
    );
  });

  test("[1,2,3,4,4,3,2,1],4の引数を渡して[1,4,2,3,3,2,4,1]が返却される", () => {
    expect(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)).toEqual(
      expect.arrayContaining([1, 4, 2, 3, 3, 2, 4, 1])
    );
  });

  test("[1,1,2,2],2の引数を渡して[1,2,1,2]が返却される", () => {
    expect(shuffle([1, 1, 2, 2], 2)).toEqual(
      expect.arrayContaining([1, 2, 1, 2])
    );
  });
});
