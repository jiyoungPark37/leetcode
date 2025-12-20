function longestCommonSubsequence(text1: string, text2: string): number {
    if(text1.length < text2.length) {
        [text1,text2] = [text2, text1];
    }
    const arr = Array.from({length: text2.length}, () => Array.from({length: text1.length}, () => 0));


    for(let i = 0; i < text2.length; i++) {
        for(let j = 0; j < text1.length; j++) {
            if(text1[j] === text2[i]) {
                arr[i][j] = (i-1>= 0 && j-1 >= 0 ? arr[i-1][j-1] : 0) + 1;
            } else {
                const left = i-1 >= 0 ? arr[i-1][j] : 0;
                const top = j-1 >= 0 ? arr[i][j-1] : 0;
                arr[i][j] = Math.max(left, top);
            }
        }
    }
    return arr[text2.length-1][text1.length - 1];
};