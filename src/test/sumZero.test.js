const sumZero = require("./../main/sumZero");
//   Question
//      Given an integer n, return any array containing n unique integers such that they add up to 0.

describe("渡された引数の数で値が0になる配列を返却する", () => {
  test("5の引数を渡して[-2,2,-1,1,0]が返却される", () => {
    expect(sumZero(5)).toEqual(expect.arrayContaining([-2, 2, -1, 1, 0]));
  });

  test("3の引数を渡して[-1,0,1]が返却される", () => {
    expect(sumZero(3)).toEqual(expect.arrayContaining([-1, 0, 1]));
  });

  test("1の引数を渡して[0]が返却される", () => {
    expect(sumZero(1)).toEqual(expect.arrayContaining([0]));
  });
});
