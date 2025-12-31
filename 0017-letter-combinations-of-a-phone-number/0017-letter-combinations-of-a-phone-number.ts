function letterCombinations(digits: string): string[] {
    const DIGITS = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    const answer = [];
    const dfs = (cur, idx) => {
        if(cur.length === digits.length) {
            answer.push(cur.join(''));
            return;
        }
        if(idx >= digits.length) return;
        const nextLetters = DIGITS[digits[idx]];
        for(let i = 0; i < nextLetters.length; i++) {
            cur.push(nextLetters[i]);
            dfs(cur, idx+1);
            cur.pop();
        }
    }
    dfs([], 0);
    return answer;
};