function isAnagram(s: string, t: string): boolean {
    const newS = s.split('').sort((a,b) => a.localeCompare(b)).join('')
    const newT = t.split('').sort((a,b) => a.localeCompare(b)).join('')
    return newS === newT;
};