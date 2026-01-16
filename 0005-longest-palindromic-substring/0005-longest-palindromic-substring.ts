function longestPalindrome(s: string): string {
    let answer = '';

    const calculateMaxSubstring = (s,left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            if(answer.length < right - left + 1) {
                answer = s.substring(left, right+1);
            }
            left--;
            right++;
        }
    }

    for(let i = 0; i < s.length; i++) {
        calculateMaxSubstring(s, i, i+1);
        calculateMaxSubstring(s,i,i);
    }
    return answer;
};