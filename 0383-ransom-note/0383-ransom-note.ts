function canConstruct(ransomNote: string, magazine: string): boolean {
    if(ransomNote.length > magazine.length) return false;
    
    const map = new Map();
    ransomNote.split('').map(ele => map.set(ele, (map.get(ele) ?? 0) + 1));

    for(let i = 0; i < magazine.length; i++) {
        if(map.has(magazine[i])) {
            if(map.get(magazine[i]) === 1) map.delete(magazine[i]);
            else map.set(magazine[i], map.get(magazine[i]) - 1);
            if(map.size === 0) return true;
        }
    }
    if(map.size === 0) return true;
    return false;
};