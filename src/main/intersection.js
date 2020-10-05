/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
module.exports = (nums1, nums2) => {
    const set1 = Array.from(new Set(nums1));
    const set2 = new Set(nums2);
    return set1.filter(num => set2.has(num));
};