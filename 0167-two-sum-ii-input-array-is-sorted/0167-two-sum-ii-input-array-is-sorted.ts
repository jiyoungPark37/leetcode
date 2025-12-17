function twoSum(numbers: number[], target: number): number[] {
    const map = new Map();
    for(let i = 0; i < numbers.length; i++) {
        const diff = target - numbers[i];
        console.log(diff, 'target')
        if(map.has(diff)) return [map.get(diff), i+1];
        map.set(numbers[i], i+1);
    }
};