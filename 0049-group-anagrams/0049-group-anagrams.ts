function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();

    strs.forEach(str => {
        const sortedStr = str.split('').sort((a,b) => a.localeCompare(b)).join('');
        map.set(sortedStr, [...(map.get(sortedStr) ?? []), str]);
    });
    return Array.from(map.values());
};