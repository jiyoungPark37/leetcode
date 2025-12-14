function strStr(haystack: string, needle: string): number {
    if(needle.length > haystack.length) return -1;
    if(!haystack.includes(needle)) return -1;

    const len = needle.length;
    for(let i = 0; i < haystack.length - len + 1; i++) {
        if(haystack[i] !== needle[0]) continue;
        const substr = haystack.slice(i, len);
        if(substr === needle) return i;
    }
    return -1;
};