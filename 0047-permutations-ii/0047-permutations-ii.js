/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let answer = [];
    const set = new Set();
    const map = new Map();
    for(const a of nums){
        map.set(a, map.get(a) + 1 || 1);
    }
    
    const dfs = (res) => {
        if(res.length === nums.length) {
            let check = res.join('');
            if(!set.has(check)) {
                set.add(check);
                answer.push(res.slice());
            }
        }
        else{
            for(let i = 0; i < nums.length; i++) {
                
                if(map.get(nums[i]) !== 0){
                    map.set(nums[i], map.get(nums[i]) - 1);
                    res.push(nums[i]);
                    dfs(res);
                    res.pop();
                    map.set(nums[i], map.get(nums[i]) + 1);
                }
            }
        }
    }
    dfs([]);
    return answer;
};