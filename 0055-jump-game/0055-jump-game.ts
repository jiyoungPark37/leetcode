// solution1 : using array
// function canJump(nums: number[]): boolean {
//     const array = Array(nums.length).fill(false);
//     array[0] = true;

//     for(let i = 0; i < nums.length; i++) {
//         if(array[i]) {
//             for(let j = 1; j <= nums[i]; j++) {
//                 if (i + j < nums.length) {  
//                     array[i+j] = true;
//                 }
//             }
//         } else return false;
//     }
//     return array[array.length - 1];
// };
// solution2
function canJump(nums: number[]): boolean {
    let currentMoveAcc = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(currentMoveAcc === 0) return false;
        currentMoveAcc = Math.max(currentMoveAcc - 1, nums[i]);
    }
    return true;
};