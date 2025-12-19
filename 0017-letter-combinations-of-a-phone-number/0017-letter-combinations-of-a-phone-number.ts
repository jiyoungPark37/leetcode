function letterCombinations(digits: string): string[] {
    if(digits.length <= 0) return [];

    const answer = [];
    const phoneNumber = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };
    const dfs = (curDigit: string, i: number) => {
        if(curDigit.length === digits.length) {
            answer.push(curDigit);
            return;
        }

        for(const char of phoneNumber[digits[i]]) {
            dfs(curDigit + char, i + 1);
        }
    };

    dfs('', 0);
    return answer;
};