function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    while(left<=right) {
        mid = Math.floor((left+right)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    if(nums[mid] === target) return mid;
    if(left > right) return left;
    return right;
};