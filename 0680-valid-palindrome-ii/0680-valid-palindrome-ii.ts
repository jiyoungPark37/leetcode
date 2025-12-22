const isPalindrome = (s:string, left, right) => {
    while(left < right) {
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
function validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    while(left<right) {
        if(s[left] !== s[right]) return isPalindrome(s,left, right-1) || isPalindrome(s,left+1, right);
        left++;
        right--;
    }
    return true;
};