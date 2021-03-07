const findOrder = require('./../main/findOrder');
//   Question
//      There are a total of n courses you have to take labelled from 0 to n - 1.
//      Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.
//      Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.
//      If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

describe('コーススケジュールの順序を返却する', () => {
   describe('findOrder (number numCourses number[][] prerequisites) を実行するとき', () => {
      test('numCourses = 2, prerequisites = [2,3,1,2,4,3]を入力して2が返却されること', () => {
         expect(findOrder(2,[[1,0]])).toEqual(expect.arrayContaining([0,1]));
      });

      test('numCourses = 4, prerequisites = [1,4,4]を入力して1が返却されること', () => {
         expect(findOrder(4,[[1,0],[2,0],[3,1],[3,2]])).toEqual(expect.arrayContaining([0,2,1,3]));
      });

      test('numCourses = 1, prerequisites = []を入力して[0]が返却されること', () => {
         expect(findOrder(1,[])).toEqual(expect.arrayContaining([0]));
      });
    });
});