function longestPalindrome(s: string): string {
    let answer = s[0];
    const len = s.length;
    for(let i = 0; i < len; i++) {
        let left = i-1;
        let right = i+1;

        while(left >= 0 && right < len && s[left] === s[right]) {
            if(answer.length < right - left + 1) answer = s.slice(left, right + 1);
            left--;
            right++;
        }

        left = i-1;
        right = i;
        while(left >= 0 && right < len && s[left] === s[right]) {
            if(answer.length < right - left + 1) answer = s.slice(left, right + 1);
            left--;
            right++;
        }
    }
    return answer
};