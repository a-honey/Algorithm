function solution(participant, completion) {
    const participantCount = {};

    participant.forEach((name) => {
        participantCount[name] = (participantCount[name] || 0) + 1;
    });

    completion.forEach((name) => {
        if (participantCount[name]) {
            participantCount[name]--;
        }
    });

    for (let name in participantCount) {
        if (participantCount[name] > 0) {
            return name;
        }
    }
}