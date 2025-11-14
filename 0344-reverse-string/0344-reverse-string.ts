/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const mid = Math.floor(s.length / 2);

    for(let i = 0; i < mid; i++) {
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
    }
};