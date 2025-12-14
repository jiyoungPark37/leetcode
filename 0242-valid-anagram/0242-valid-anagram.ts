function isAnagram(s: string, t: string): boolean {
    const convert = str => str.trim().split('').sort().join('');
    console.log(convert(s), convert(t),'?')
    return convert(s) === convert(t);
};