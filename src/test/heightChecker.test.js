const heightChecker = require("./../main/heightChecker.js");
//    Question
//       Students are asked to stand in non - decreasing order of heights for an annual photo.
//       Return the minimum number of students that must move in order for all students to be standing in non - decreasing order of height.
//       Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

describe("引数の要素を降順に並び替えるために移動する最小の数を返却する", () => {
  describe("heightChecker([nums]) が実行されるとき", () => {
    test("number[]=[1,1,4,2,1,3]を入力して3が返却されること", () => {
      expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3);
    });

    test("number[]=[5,1,2,3,4]を入力して5が返却されること", () => {
      expect(heightChecker([5, 1, 2, 3, 4])).toBe(5);
    });

    test("number[]=[1,2,3,4,5]を入力して0が返却されること", () => {
      expect(heightChecker([1, 2, 3, 4, 5])).toBe(0);
    });
  });
});
