const INTEGER_TO_ROMAN = {
    1: {
        1: 'I',
        5: 'V',
        10: 'X',
    }, 
    2: {
        1: 'X',
        5: 'L',
        10: 'C'
    },
    3: {
        1: 'C',
        5: 'D',
        10: 'M'
    },
    4: {
        1: 'M',
    }
}
const convertNumToRoman = (num: number, digit: number): string => {
    const obj = INTEGER_TO_ROMAN[digit];
    if(num === 0) return '';
    if(num >= 1 && num <= 3) return `${obj[1].repeat(num)}`
    if(num === 4) return `${obj[1]}${obj[5]}`;
    if(num === 5) return obj[num];
    if(num < 9) return `${obj[5]}${obj[1].repeat(num - 5)}`;
    return `${obj[1]}${obj[10]}`;
}
function intToRoman(num: number): string {
    const numToString = String(num);
    const len = numToString.length;
    const answer: string[] = Array(len).fill('');

    for(let i = 0; i < len; i++) {
        const digit = len - i;
        const currentNum = convertNumToRoman(Number(numToString[i]), digit);
        answer[i] = currentNum;
    }
    return answer.join('');
};