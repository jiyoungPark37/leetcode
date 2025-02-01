function longestCommonPrefix(strs: string[]): string {
    if(strs.length <= 0) return '';

    strs.sort((a,b) => a.length - b.length);
    let std = strs[0];
    for(let i = 1; i < strs.length; i++) {
        const compareStr = strs[i];
        let idx = 0;
        for(let j = 0; j < compareStr.length; j++) {
            if(compareStr[j] !== std[idx]) {
                std = std.slice(0, idx);
                break;
            } else idx++;
        }
    }
    return std;
};