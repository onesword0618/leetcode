const findContentChildren = require("./../main/findContentChildren.js");
//    Question
//      Assume you are an awesome parent and want to give your children some cookies.But,
//      you should give each child at most one cookie.Each child i has a greed factor gi,
//      which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj.If sj >= gi, we can assign the cookie j to the child i, and the child i will be content.Your goal is to maximize the number of your content children and output the maximum number.

describe("クッキーをあるルールに沿って割り当てる数を返却する", () => {
  describe("findContentChildren(number[] g,number[] s)  を実行するとき", () => {
    test("g = [1,2,3], s =[1,1]を引数に1が返却されること", () => {
      expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1);
    });

    test("g = [1,2], s =[1,2,3]を引数に2が返却されること", () => {
      expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2);
    });
  });
});
