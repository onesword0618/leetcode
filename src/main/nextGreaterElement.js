/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
module.exports = nextGreaterElement = function (nums1, nums2) {
  return nums1.map((x) => {
    for (i = nums2.indexOf(x) + 1; i < nums2.length; i++) {
      if (nums2[i] > x) return nums2[i];
    }
    return -1;
  });
};
