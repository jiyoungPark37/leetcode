/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if(n === 0) return;
    let idx = 0;
    for(let i = 0; i < nums1.length; i++) {
        if(nums1[i] === 0 && idx < n) {
            nums1[i] = nums2[idx];
            idx+=1;
        }
    }
    nums1.sort((a,b) => a - b);
};