function isPalindrome(s: string): boolean {
    const str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
};