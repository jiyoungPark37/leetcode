function isAnagram(s: string, t: string): boolean {
    s = s.trim().split('').sort().join('');
    t = t.trim().split('').sort().join('');
    return s === t;
};