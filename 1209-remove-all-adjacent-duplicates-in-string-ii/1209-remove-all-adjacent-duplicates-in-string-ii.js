/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let count = 1;
    const stack = [];
    let answer = '';
    
    for(let i = 0; i < s.length; i++){
        if(stack.length !== 0 && s[i] === stack[stack.length - 1][0]){
            let count = stack[stack.length-1][1];
            count++;
            if(count === k) {
                while(stack.length !== 0 && stack[stack.length-1][0] === s[i]){
                    stack.pop();
                }
            } else stack.push([s[i], count]);
        } else stack.push([s[i], 1]);
    }
    for(let i = 0; i <stack.length; i++){
        answer += stack[i][0];
    }
    return answer;
};