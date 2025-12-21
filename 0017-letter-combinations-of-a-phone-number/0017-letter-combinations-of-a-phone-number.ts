const DIGITS = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
}
function letterCombinations(digits: string): string[] {
    const answer = [];
    const dfs = (idx, str) => {
        if(idx >= digits.length) {
            answer.push(str.join(''));
            return;
        }
        const cur = DIGITS[digits[idx]];
        for(const char of cur) {
            str.push(char);
            dfs(idx+1, str);
            str.pop();
        }
    }
    dfs(0,[]);
    return answer;
};