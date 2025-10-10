const isValid = (str: string[]):boolean => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            count+=1;
        } else {
            if(count <= 0) return false;
            count-=1;
        }
    }
    if(count > 0) return false;
    return true;
}
function generateParenthesis(n: number): string[] {
    const len = n * 2;
    const answer = [];

    const traverse = (cur: string[], left: number, right: number) => {
        if(cur.length === len) {
            const res = isValid(cur);
            if(res) answer.push(cur.join(''));
            return;
        }

        if(left < n) {
            traverse([...cur, '('], left + 1, right);
        }
        if(right < n) {
            traverse([...cur, ')'], left, right + 1);
        }
    }
    traverse(['('], 1, 0);
    return answer;
};