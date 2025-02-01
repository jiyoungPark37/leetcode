function mergeAlternately(word1: string, word2: string): string {
    const answer = [];

    const minLen = Math.min(word1.length, word2.length);

    for(let i = 0; i < minLen; i++) {
        answer.push(word1[i])
        answer.push(word2[i]);
    };
    if(word1.length > minLen) answer.push(word1.slice(minLen));    
    if(word2.length > minLen) answer.push(word2.slice(minLen));
    return answer.join('');    
};