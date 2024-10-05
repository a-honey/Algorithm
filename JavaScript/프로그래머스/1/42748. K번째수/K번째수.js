function solution(array, commands) {
    const answer = [];
    
    commands.forEach(([i, j, k]) => {
        const splitted_array = array.slice(i - 1, j).sort((a, b) => a - b);
        
        answer.push(splitted_array[k - 1])
    })
    return answer;
}