/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map = new Map();
    
    for(const a of nums){
        map.set(a, 1);
    }
    let answer = [];
    map.forEach((val,key) => {
        answer.push(key);
    })
    for(let i = 0; i < answer.length; i++) {
        nums[i] = answer[i]
    }
    while(answer.length !== nums.length) {
        nums.pop();
    }
};