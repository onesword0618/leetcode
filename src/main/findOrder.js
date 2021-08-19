/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
module.exports = findOrder = (numCourses, prerequisites) => {
  let adjList = new Array(numCourses).fill(0).map(() => []);
  let visited = new Array(numCourses).fill(false);
  let inDegree = new Array(numCourses).fill(0);

  for (let [course, preCourse] of prerequisites) {
    adjList[preCourse].push(course);
    inDegree[course]++;
  }

  let res = [];

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] == 0 && !visited[i]) {
      dfs(i);
    }
  }

  return res.length === numCourses ? res : [];

  function dfs(node) {
    res.push(node);
    visited[node] = true;

    for (let next of adjList[node]) {
      inDegree[next]--;
      if (inDegree[next] == 0 && !visited[next]) {
        dfs(next);
      }
    }
  }
};
