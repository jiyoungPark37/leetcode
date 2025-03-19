function twoSum(numbers: number[], target: number): number[] {
    const map = new Map();

    for(let i = 0; i < numbers.length; i++) {
        const sum = target - numbers[i];
        if(map.has(sum)) return [map.get(sum), i+1];
        map.set(numbers[i], i+1);
    }
    
};