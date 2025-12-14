function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();

    for(const str of strs) {
        const sorted = str.split('').sort().join('');
        map.set(sorted, [...(map.get(sorted) ?? []), str]);
    }
    return Array.from(map.values());
};