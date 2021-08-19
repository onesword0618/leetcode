const canFinish = require("../main/canFinish.js");
//    Question
//      There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
//      For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
//      Return true if you can finish all courses. Otherwise, return false.

describe("コースが終了可能かの結果を返却する", () => {
  describe("canFinish(number numCourses, number[][] prerequisites) を実行するとき", () => {
    test("numCourses = 2, prerequisites = 3を引数に [[1,0]]が返却されること", () => {
      expect(canFinish(2, [[1, 0]])).toBeTruthy();
    });

    test("numCourses = 2, prerequisites = 3を引数に [[1,0],[0,1]]が返却されること", () => {
      expect(
        canFinish(2, [
          [1, 0],
          [0, 1],
        ])
      ).toBeFalsy();
    });
  });
});
