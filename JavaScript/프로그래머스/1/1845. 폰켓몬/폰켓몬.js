function solution(nums) {
    const typeCount = new Set(nums).size;
    
    return Math.min(typeCount, nums.length/2)
}