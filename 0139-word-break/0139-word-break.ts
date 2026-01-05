function wordBreak(s: string, wordDict: string[]): boolean {
    const arr = new Array(s.length + 1).fill(false);
    arr[s.length] = true;

    for(let i = arr.length - 1; i >= 0; i--) {
        for(const w of wordDict) {
            if(i + w.length <= s.length && w === s.slice(i, i + w.length)) {
                arr[i] = arr[i + w.length];
            }
            if(arr[i]) break;
        }
    }
    return arr[0];
};