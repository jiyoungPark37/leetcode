function isPalindrome(s: string): boolean {
    const str = s.trim().toLowerCase().replace(/[^0-9a-z]+/g, '');
    return str === str.split('').reverse().join('');
};