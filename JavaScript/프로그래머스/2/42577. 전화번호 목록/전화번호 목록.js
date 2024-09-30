function solution(phone_book) {
    const phoneSet = new Set(phone_book);
    
    for (const phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            if (phoneSet.has(phone.slice(0, i))) {
                return false;
            }
        }
    }
    
    return true;
}