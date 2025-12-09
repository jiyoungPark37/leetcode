// [4,9,5], nums2 = [9,4,9,8,4]
// [4,5,9] / [4,4,8,9,9]
function intersect(nums1: number[], nums2: number[]): number[] {
    if(nums2.length > nums1.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const map = new Map();
    const answer = [];
    nums2.forEach(ele => map.set(ele, (map.get(ele) ?? 0) + 1));

    for(let i = 0; i < nums1.length; i++) {
        const cur = nums1[i];
        if(map.get(cur) > 0) {
            map.set(cur, map.get(cur) - 1);
            answer.push(cur);
        }
    }
    return answer;
};