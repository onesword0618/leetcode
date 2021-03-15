/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 module.exports = canFinish = (numCourses, prerequisites) => {
  let adjList = new Array(numCourses).fill(0).map(() => []);
  let inDegree = new Array(numCourses).fill(0);
  let totalDegree = 0;

  for (let pair of prerequisites) {
      let course = pair[0];
      let prerequisite = pair[1];
      adjList[prerequisite].push(course);
      inDegree[course]++;
      totalDegree++;
  };

  let stack = [];
  let count = 0;
  for (let i = 0; i < inDegree.length; i++) {
      if (inDegree[i] == 0) {
          stack.push(i);
      };
  };

  while (stack.length > 0) {
      let v = stack.pop();
      count++;
      let courses = adjList[v];
      for (let course of courses) {
          inDegree[course]--;
          totalDegree--;
          if (inDegree[course] == 0) {
              stack.push(course);
          };
      };
  };
  return count == numCourses;
};