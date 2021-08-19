/**
 * @param {number[]} time
 * @return {number}
 */
module.exports = (time) => {
  let count = 0;
  let map = new Map();

  for (let num of time) {
    let mod = num % 60;
    let sHalf = mod === 0 ? 0 : 60 - mod;

    if (map.has(sHalf)) {
      count += map.get(sHalf);
    }

    if (map.has(mod)) {
      map.set(mod, map.get(mod) + 1);
    } else {
      map.set(mod, 1);
    }
  }
  return count;
};
