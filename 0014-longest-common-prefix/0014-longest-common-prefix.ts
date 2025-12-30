function longestCommonPrefix(strs: string[]): string {
    strs.sort((a,b) => a.length - b.length);
    let answer = '';
    for(let i = 1; i <= strs[0].length; i++) {
        const std = strs[0].slice(0, i);
        for(let j = 1; j < strs.length; j++) {
            if(!strs[j].startsWith(std)) return answer;
        } 
        answer = std;
    }
    return answer;
};