function generateParenthesis(n: number): string[] {
    const total = n * 2;
    const answer = [];

    const dfs = (cur, open, close) => {
        if(cur.length === total) {
            answer.push(cur.join(''));
            return;
        }
        if(open < n) {
            dfs([...cur, '('], open+1, close);
        }
        if(close < open) {
            dfs([...cur, ')'], open, close+1);
        }
    }
    dfs(['('], 1, 0);
    return answer;
};