function generateParenthesis(n: number): string[] {
    const len = n * 2;
    const answer = [];

    const traverse = (cur: string[], left: number, right: number) => {
        if(cur.length === len) {
            answer.push(cur.join(''));
            return;
        }

        if(left < n) {
            traverse([...cur, '('], left + 1, right);
        }
        if(right < left) {
            traverse([...cur, ')'], left, right + 1);
        }
    }
    traverse(['('], 1, 0);
    return answer;
};