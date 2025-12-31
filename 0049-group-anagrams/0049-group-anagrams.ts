function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();
    for(const str of strs) {
        const word = str.split('').sort().join('');
        map.set(word, [...(map.get(word) ?? []), str]);
    }
    return Array.from(map.values());
};