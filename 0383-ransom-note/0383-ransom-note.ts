function canConstruct(ransomNote: string, magazine: string): boolean {
    if(magazine.length < ransomNote.length) return false;

    const map = new Map();
    magazine.split('').forEach(ele => map.set(ele, (map.get(ele) ?? 0) + 1));
    for(const ch of ransomNote) {
        if(map.get(ch) > 0) {
            map.set(ch, map.get(ch) - 1);
        } else return false;
    }  
    return true;
};