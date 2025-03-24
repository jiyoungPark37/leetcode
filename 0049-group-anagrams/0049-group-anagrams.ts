function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();

    for(let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');
        map.set(sorted, [...(map.get(sorted) ?? []), strs[i]]);
    } 
    const arr = Array.from(map.values());
    return arr;
};