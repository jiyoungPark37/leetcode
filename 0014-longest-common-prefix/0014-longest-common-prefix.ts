function longestCommonPrefix(strs: string[]): string {
    strs.sort((a,b) => a.length - b.length);
    const std = strs[0];
    let cur = '';
    for(let i = 1; i <= std.length; i++){
        const substr = std.substring(0,i);
        const check = strs.every(str => str.startsWith(substr));
        if(!check) return cur;
        cur = substr;
    }
    return cur;
};