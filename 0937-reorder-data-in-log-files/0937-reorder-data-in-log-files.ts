function reorderLogFiles(logs: string[]): string[] {
    const compareLog = (a,b) => {
        const [idA, _rA] = a.split(/\s+/, 1);
        const [idB, _rB] = b.split(/\s+/, 1);

        const contentA = a.slice(idA.length + 1);
        const contentB = b.slice(idB.length + 1);

        const digit_regex = /\d+/;
        const isDigitA = digit_regex.test(contentA);
        const isDigitB = digit_regex.test(contentB);

        if(isDigitA && isDigitB) return 0;
        if(isDigitA && !isDigitB) return 1;
        if(!isDigitA && isDigitB) return -1;

        if(contentA > contentB) return 1;
        if(contentA < contentB) return -1;
        if(idA > idB) return 1;
        if(idA<idB) return -1;
        return 0;
    }
    return logs.sort((a,b) => compareLog(a,b));
};