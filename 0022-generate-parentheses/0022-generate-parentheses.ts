function generateParenthesis(n: number): string[] {
    const totalLen = n * 2;
    const answer = [];
    const dfs = (open, close, cur) => {
        if(cur.length === totalLen) {
            answer.push(cur.join(''));
            return;
        }
        if(open < n) {
            dfs(open+1, close, [...cur, '(']);
        }
        if(close < open) {
            dfs(open, close+1, [...cur, ')']);
        }
    }
    dfs(1,0,['(']);
    return answer;
};