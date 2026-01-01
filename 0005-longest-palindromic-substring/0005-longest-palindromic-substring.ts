function longestPalindrome(s: string): string {
    let answer = '';
    const n = s.length;
    for(let i = 0; i < n; i++) {
        let left = i;
        let right = i+1;
        while(left >= 0 && right < n && s[left] === s[right]) {
            if(answer.length < right - left + 1) answer = s.substring(left, right + 1);
            left--;
            right++;
        }
        left = i;
        right=i;
        while(left >= 0 && right < n && s[left] === s[right]) {
            if(answer.length < right - left + 1) answer = s.substring(left, right + 1);
            left--;
            right++;
        }
    }
    return answer;
};