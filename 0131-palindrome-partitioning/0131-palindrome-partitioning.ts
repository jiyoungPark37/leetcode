function partition(s: string): string[][] {
    const answer = [];

    const dfs = (res: string[], str: string) => {
        if(str.length === 0) {
            answer.push(res.slice());
        } else {
            for(let i = 0; i < str.length; i++) {
                const s = str.substring(0, i+1);
                if(s.split('').reverse().join('') === s) {
                    dfs([...res, s], str.substring(i+1));
                }
            }
        }
    }
    dfs([], s);
    return answer;
};