function lengthOfLastWord(s: string): number {
    const strs = s.trim().split(/\s+/);
    return strs[strs.length - 1].length;
};