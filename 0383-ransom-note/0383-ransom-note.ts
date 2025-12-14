function canConstruct(ransomNote: string, magazine: string): boolean {
    if(ransomNote.length > magazine.length) return false;
    const map = new Map();
    for(const ch of magazine){
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }
    for(const ch of ransomNote) {
        if(!map.has(ch) || map.get(ch) <= 0) return false;
        map.set(ch, map.get(ch) - 1)
    }
    return true;
};