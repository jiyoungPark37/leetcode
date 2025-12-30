function isPalindrome(s: string): boolean {
    const std = s.trim().replace(/[^0-9A-Za-z]/g, '').toLowerCase();
    // console.log(std, 'std', std.split('').reverse())
    return std === std.split('').reverse().join('');
};