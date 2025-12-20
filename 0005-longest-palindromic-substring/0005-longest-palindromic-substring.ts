function longestPalindrome(s: string): string {
    let answer = '';

    for(let i = 0; i < s.length; i++) {
        let left = i;
        let right = i + 1;
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            if(answer.length < right - left + 1) answer = s.substring(left, right + 1);
            left--;
            right++;
        }

        left = i;
        right = i;
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            if(answer.length < right - left + 1) answer = s.substring(left, right + 1);
            left--;
            right++;
        }
    }
    return answer;
};