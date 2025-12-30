function strStr(haystack: string, needle: string): number {
    if(needle.length > haystack.length) return -1;
    let answer = -1;
    const len = needle.length;
    for(let i = 0; i < haystack.length; i++){
        const substr = haystack.substring(i, i+len);
        if(substr === needle) return i;
    }
    return answer;
};