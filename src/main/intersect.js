/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
module.exports = intersect = function (nums1, nums2) {
  let checkArray = nums1;
  let checkerArray = nums2;

  return checkArray.filter((a) => {
    let i = checkerArray.indexOf(a);
    checkerArray[i] = -1;
    return i < 0 ? false : true;
  });
};
