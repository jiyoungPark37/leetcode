function plusOne(digits: number[]): number[] {
    const result = [];
    let add = 1;

    for(let i = digits.length - 1; i >= 0; i--) {
        const cur = digits[i] + add;
        console.log(cur, 'cur')
        if(cur >= 10) {
            const diff = cur - 10;
            add = 1;
            result.unshift(diff);
        } else {
            add = 0;
            result.unshift(cur);
        }
    }
    if(add > 0) result.unshift(add);
    return result;
};