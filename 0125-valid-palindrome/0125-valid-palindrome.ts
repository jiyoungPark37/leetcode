function isPalindrome(s: string): boolean {
    const str = s.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};