function reverseWords(s: string): string {
    const arr = s.trim().split(/\s+/);
    let start = 0;
    let end = arr.length - 1;
    while(start<end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr.join(' ');
};