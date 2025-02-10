function strStr(haystack: string, needle: string): number {
    if(needle.length > haystack.length) return -1;

    let left = 0;
    for(let i = 0; i < haystack.length; i++) {
        let idx = i;
        while(haystack[idx] === needle[left]) {
            console.log(idx, left, 'left and idx', haystack[idx], needle[left])
            idx++;
            left++;
            if(left === needle.length) return i;
        } 
        left = 0;
    }
    return -1;
};