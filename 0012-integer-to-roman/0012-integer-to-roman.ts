function intToRoman(num: number): string {
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const integers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    console.log(symbols.length===integers.length);

    let answer = '';
    for(let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        const int = integers[i];
        while(num >= int) {
            num-=int;
            answer+=symbol;
        }
    }
    return answer;
};