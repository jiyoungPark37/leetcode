function canConstruct(ransomNote: string, magazine: string): boolean {
    if(magazine.length < ransomNote.length) return false;

    const map = new Map();
    magazine.split('').forEach(ele => map.set(ele, (map.get(ele) ?? 0) + 1));
    for(const char of ransomNote) {
        if(!map.has(char)) return false;
        if(map.get(char) <= 0) return false;
        map.set(char, map.get(char) - 1);
    }
    return true;
};