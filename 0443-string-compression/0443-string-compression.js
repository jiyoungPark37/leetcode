/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let count = 1;
    let std = chars[0];
    let answer = '';
    
    for(let i = 1; i < chars.length; i++){
        if(std === chars[i]) count++;
        else {
            if(count === 1) answer+= std
            else answer += std + count;
            count = 1;
            std = chars[i];
        }
    }
    if(count === 1) answer += std;
    else answer += std + count;
    for(let i = 0; i < answer.length; i++){
        chars[i] = answer[i];
    }
    while(answer.length < chars.length){
        chars.pop();
    }
};